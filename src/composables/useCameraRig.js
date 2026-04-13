/**
 * useCameraRig — Spline-based camera path for scroll-driven 3D navigation.
 *
 * Defines a CatmullRom spline through the scene. Maps scroll percentage (0→1)
 * to a position on the path. Each section (hero, about, projects, contact)
 * corresponds to a segment of the spline.
 */
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import * as THREE from "three";
import { useWebGLStore } from "../stores/webgl.js";

export function useCameraRig() {
  const store = useWebGLStore();

  // ── Spline Control Points (the camera's journey through 3D space) ──
  const controlPoints = [
    // Hero: Wide establishing shot, looking at center
    new THREE.Vector3(0, 0, 18),
    // Hero → About transition: orbit outward
    new THREE.Vector3(4, 2, 14),
    // About: Closer, elevated perspective
    new THREE.Vector3(2, 4, 10),
    // About → Projects transition: pull back, start horizontal drift
    new THREE.Vector3(-2, 2, 12),
    // Projects: Side angle, panning view
    new THREE.Vector3(-6, 0, 10),
    // Projects → Contact: dramatic swoop
    new THREE.Vector3(-3, -2, 8),
    // Contact: close, intimate angle
    new THREE.Vector3(0, -1, 14),
    // Final: pull back to wide shot
    new THREE.Vector3(0, 0, 20),
  ];

  // Look-at control points (where the camera should aim)
  const lookAtPoints = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 1, -2),
    new THREE.Vector3(-1, 0, -1),
    new THREE.Vector3(-3, 0, -2),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
  ];

  // Create the spline curves
  const positionSpline = new THREE.CatmullRomCurve3(controlPoints);
  const lookAtSpline = new THREE.CatmullRomCurve3(lookAtPoints);

  // Smoothed camera values
  const currentPosition = ref(new THREE.Vector3());
  const currentLookAt = ref(new THREE.Vector3());
  const targetPosition = new THREE.Vector3();
  const targetLookAt = new THREE.Vector3();

  // Damping factor (higher = smoother/slower follow)
  const damping = 0.04;

  /**
   * Get camera position and lookAt for a given progress value (0-1)
   */
  function getCameraState(progress) {
    const t = Math.max(0, Math.min(1, progress));
    const pos = positionSpline.getPointAt(t);
    const look = lookAtSpline.getPointAt(t);
    return { position: pos, lookAt: look };
  }

  /**
   * Update camera with damping — called every frame from the render loop
   */
  function update(delta) {
    const { position, lookAt } = getCameraState(store.scrollProgress);

    // Add mouse parallax offset
    const parallax = store.mouseParallax;
    targetPosition.copy(position);
    targetPosition.x += parallax.x * 0.8;
    targetPosition.y += parallax.y * 0.6;

    targetLookAt.copy(lookAt);

    // Smooth damping interpolation
    currentPosition.value.lerp(targetPosition, damping);
    currentLookAt.value.lerp(targetLookAt, damping);

    // Also add a subtle breathing motion
    const breathe = Math.sin(Date.now() * 0.001) * 0.05;
    currentPosition.value.y += breathe;
  }

  /**
   * Get the spline as geometry for debugging visualization
   */
  function getSplineGeometry(segments = 200) {
    const points = positionSpline.getPoints(segments);
    return new THREE.BufferGeometry().setFromPoints(points);
  }

  return {
    currentPosition,
    currentLookAt,
    update,
    getCameraState,
    getSplineGeometry,
    positionSpline,
    lookAtSpline,
  };
}
