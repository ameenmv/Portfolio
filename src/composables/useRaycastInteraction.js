/**
 * useRaycastInteraction — Deep 3D-to-HTML interaction system.
 *
 * Uses Three.js Raycaster to detect clicks on 3D floating objects,
 * then triggers GSAP Flip animations to transform 3D objects into
 * full-screen HTML content panels.
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useUIStore } from "../stores/ui.js";

gsap.registerPlugin(Flip);

export function useRaycastInteraction() {
  const uiStore = useUIStore();

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const hoveredObject = ref(null);
  const interactableObjects = ref([]);

  /**
   * Register a Three.js mesh as interactable
   */
  function registerObject(mesh, metadata = {}) {
    mesh.userData = { ...mesh.userData, ...metadata, interactable: true };
    interactableObjects.value.push(mesh);
  }

  /**
   * Remove a mesh from interactables
   */
  function unregisterObject(mesh) {
    interactableObjects.value = interactableObjects.value.filter(
      (obj) => obj !== mesh
    );
  }

  /**
   * Perform raycast and return intersected objects
   */
  function castRay(camera) {
    raycaster.setFromCamera(mouse, camera);
    return raycaster.intersectObjects(interactableObjects.value, true);
  }

  /**
   * Handle mouse move for hover detection
   */
  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  /**
   * Handle click — triggers Flip transition
   */
  function onClick(camera) {
    const intersects = castRay(camera);
    if (intersects.length === 0) return;

    const hit = intersects[0].object;
    if (!hit.userData.interactable) return;

    // Get the project data from the mesh
    const project = hit.userData.project;
    if (!project) return;

    // Get the screen position of the 3D object
    const screenPos = getScreenPosition(hit, camera);

    // Trigger GSAP Flip transition
    flipToDetail(screenPos, project);
  }

  /**
   * Convert 3D world position to screen coordinates
   */
  function getScreenPosition(object, camera) {
    const vec = new THREE.Vector3();
    object.getWorldPosition(vec);
    vec.project(camera);

    return {
      x: ((vec.x + 1) / 2) * window.innerWidth,
      y: ((-vec.y + 1) / 2) * window.innerHeight,
    };
  }

  /**
   * GSAP Flip transition: 3D object → full-screen HTML panel
   */
  function flipToDetail(screenPos, project) {
    // Create a temporary "origin" element at the 3D object's screen position
    const origin = document.createElement("div");
    origin.className = "flip-origin";
    origin.style.cssText = `
      position: fixed;
      left: ${screenPos.x}px;
      top: ${screenPos.y}px;
      width: 200px;
      height: 150px;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 1000;
    `;
    document.body.appendChild(origin);

    // Open project detail in store
    uiStore.openProject(project);

    // Wait for DOM update, then Flip
    requestAnimationFrame(() => {
      const target = document.querySelector(".project-detail-panel");
      if (!target) {
        document.body.removeChild(origin);
        return;
      }

      // Capture state
      const state = Flip.getState(origin);

      // Animate from origin to full panel
      gsap.fromTo(
        target,
        {
          opacity: 0,
          scale: 0.3,
          x: screenPos.x - window.innerWidth / 2,
          y: screenPos.y - window.innerHeight / 2,
          borderRadius: "50%",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          borderRadius: "16px",
          duration: 0.8,
          ease: "power4.out",
          onComplete: () => {
            document.body.removeChild(origin);
          },
        }
      );
    });
  }

  /**
   * Close detail with reverse animation
   */
  function closeDetail() {
    const target = document.querySelector(".project-detail-panel");
    if (!target) return;

    gsap.to(target, {
      opacity: 0,
      scale: 0.5,
      y: 50,
      borderRadius: "50%",
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        uiStore.closeProject();
      },
    });
  }

  onMounted(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", onMouseMove);
  });

  return {
    registerObject,
    unregisterObject,
    castRay,
    onClick,
    closeDetail,
    hoveredObject,
    mouse,
  };
}
