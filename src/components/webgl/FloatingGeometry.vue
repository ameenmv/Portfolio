<template>
  <TresGroup ref="geoGroupRef">
    <!-- Subtle wireframe shapes — very low opacity, large, slow -->
    <TresMesh
      v-for="(shape, i) in shapes"
      :key="'shape-' + i"
      :position="[shape.x, shape.y, shape.z]"
      :rotation="[shape.rx, shape.ry, shape.rz]"
      :scale="[shape.scale, shape.scale, shape.scale]"
    >
      <component :is="shape.geometry" :args="shape.geoArgs" />
      <TresMeshBasicMaterial
        :color="shape.color"
        :wireframe="true"
        :transparent="true"
        :opacity="shape.opacity"
      />
    </TresMesh>

    <!-- Elegant thin rings -->
    <TresMesh
      v-for="(ring, i) in rings"
      :key="'ring-' + i"
      :position="[ring.x, ring.y, ring.z]"
      :rotation="[ring.rx, ring.ry, ring.rz]"
      :scale="[ring.scale, ring.scale, ring.scale]"
    >
      <TresTorusGeometry :args="[1, 0.008, 8, 80]" />
      <TresMeshBasicMaterial
        :color="ring.color"
        :transparent="true"
        :opacity="ring.opacity"
      />
    </TresMesh>
  </TresGroup>
</template>

<script setup>
/**
 * FloatingGeometry — Extremely subtle wireframe shapes.
 * These should be barely visible — like ghost structures in the void.
 * Very low opacity, very slow movement.
 */
import { ref, reactive } from "vue";
import { useLoop } from "@tresjs/core";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();
const geoGroupRef = ref(null);

const geometries = [
  { is: "TresIcosahedronGeometry", args: [1, 0] },
  { is: "TresOctahedronGeometry", args: [1, 0] },
  { is: "TresDodecahedronGeometry", args: [1, 0] },
];

// Only 4 shapes — quality over quantity
const shapes = reactive([]);
const configs = [
  { x: -8, y: 3, z: -6, scale: 1.8, color: "#4433aa", opacity: 0.04 },
  { x: 10, y: -4, z: -10, scale: 2.5, color: "#3322cc", opacity: 0.03 },
  { x: -3, y: -7, z: -8, scale: 1.2, color: "#5533bb", opacity: 0.05 },
  { x: 7, y: 6, z: -12, scale: 3.0, color: "#2211aa", opacity: 0.025 },
];

for (let i = 0; i < configs.length; i++) {
  const c = configs[i];
  const geo = geometries[i % geometries.length];
  shapes.push({
    ...c,
    ox: c.x, oy: c.y,
    rx: Math.random() * Math.PI,
    ry: Math.random() * Math.PI,
    rz: 0,
    geometry: geo.is,
    geoArgs: geo.args,
    rotSpeed: 0.08 + Math.random() * 0.12,
    phase: Math.random() * Math.PI * 2,
  });
}

// 3 elegant thin rings
const rings = reactive([]);
const ringConfigs = [
  { x: 5, y: 2, z: -7, scale: 2.5, color: "#6644cc", opacity: 0.06 },
  { x: -7, y: -3, z: -9, scale: 3.5, color: "#4433aa", opacity: 0.04 },
  { x: 0, y: 5, z: -14, scale: 4.0, color: "#3322cc", opacity: 0.03 },
];

for (const c of ringConfigs) {
  rings.push({
    ...c,
    ox: c.x, oy: c.y,
    rx: Math.random() * Math.PI,
    ry: Math.random() * Math.PI,
    rz: 0,
    rotSpeed: 0.03 + Math.random() * 0.05,
    phase: Math.random() * Math.PI * 2,
  });
}

const { onBeforeRender } = useLoop();

onBeforeRender(({ elapsed }) => {
  const t = elapsed;
  const mx = store.mousePosition.x;
  const my = store.mousePosition.y;

  // Shapes: very slow rotation + gentle float
  for (const s of shapes) {
    s.rx += s.rotSpeed * 0.002;
    s.ry += s.rotSpeed * 0.003;
    s.x = s.ox + Math.sin(t * 0.03 + s.phase) * 0.8;
    s.y = s.oy + Math.cos(t * 0.025 + s.phase) * 0.6;
    // Mouse parallax
    s.x += mx * 0.3;
    s.y += my * 0.2;
  }

  // Rings: slow orbit
  for (const r of rings) {
    r.rx += r.rotSpeed * 0.003;
    r.ry += r.rotSpeed * 0.004;
    r.x = r.ox + Math.sin(t * 0.02 + r.phase) * 0.5;
    r.y = r.oy + Math.cos(t * 0.015 + r.phase) * 0.4;
    r.x += mx * 0.2;
    r.y += my * 0.15;
  }
});
</script>
