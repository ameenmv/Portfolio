<template>
  <TresPerspectiveCamera
    ref="cameraRef"
    :position="[cameraPos.x, cameraPos.y, cameraPos.z]"
    :fov="55"
    :near="0.1"
    :far="100"
    make-default
  />
</template>

<script setup>
import { ref, reactive } from "vue";
import { useLoop } from "@tresjs/core";
import * as THREE from "three";
import { useCameraRig } from "../../composables/useCameraRig.js";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();
const cameraRef = ref(null);

const { currentPosition, currentLookAt, update: updateRig } = useCameraRig();

// Initialize positions
currentPosition.value = new THREE.Vector3(0, 0, 18);
currentLookAt.value = new THREE.Vector3(0, 0, 0);

// Reactive positions for TresJS binding
const cameraPos = reactive({ x: 0, y: 0, z: 18 });

// Hook into TresJS render loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  // Update camera rig (spline interpolation + parallax)
  updateRig(delta);

  // Copy to reactive bindings
  cameraPos.x = currentPosition.value.x;
  cameraPos.y = currentPosition.value.y;
  cameraPos.z = currentPosition.value.z;

  // Make camera look at the lookAt target
  if (cameraRef.value?.instance) {
    const camera = cameraRef.value.instance;
    camera.lookAt(
      currentLookAt.value.x,
      currentLookAt.value.y,
      currentLookAt.value.z
    );

    // Subtle FOV breathing based on scroll velocity
    const targetFov = 55 + Math.abs(store.scrollVelocity) * 15;
    camera.fov += (targetFov - camera.fov) * 0.05;
    camera.updateProjectionMatrix();
  }
});
</script>
