<template>
  <TresGroup ref="projectsGroupRef">
    <TresMesh
      v-for="(card, i) in projectCards"
      :key="'proj-' + i"
      :position="[card.x, card.y, card.z]"
      :rotation="[card.rx, card.ry, card.rz]"
      :scale="[card.sx, card.sy, 1]"
    >
      <TresPlaneGeometry :args="[2.4, 1.6]" />
      <TresMeshBasicMaterial
        :color="card.color"
        :transparent="true"
        :opacity="card.opacity"
        :wireframe="card.wireframe"
        :side="2"
      />
    </TresMesh>

    <!-- Glowing accent lines connecting project cards -->
    <TresMesh
      v-for="(line, i) in connectionLines"
      :key="'line-' + i"
      :position="[line.x, line.y, line.z]"
      :rotation="[0, 0, line.angle]"
      :scale="[line.length, 0.005, 1]"
    >
      <TresPlaneGeometry :args="[1, 1]" />
      <TresMeshBasicMaterial
        :color="'#6644cc'"
        :transparent="true"
        :opacity="line.opacity"
      />
    </TresMesh>
  </TresGroup>
</template>

<script setup>
/**
 * FloatingProjects — 3D project card outlines floating in space.
 * Subtle wireframe rectangles that hint at project cards,
 * becoming more visible as user scrolls to the Projects section.
 * Connected by faint accent lines for a "constellation" effect.
 */
import { ref, reactive } from "vue";
import { useLoop } from "@tresjs/core";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();
const projectsGroupRef = ref(null);

const cardColors = ["#6644cc", "#8855ee", "#4433aa", "#aa44ff"];

// Generate floating project card outlines
const CARD_COUNT = 6;
const projectCards = reactive([]);

for (let i = 0; i < CARD_COUNT; i++) {
  const angle = (i / CARD_COUNT) * Math.PI * 2;
  const radius = 4 + Math.random() * 3;

  projectCards.push({
    x: Math.cos(angle) * radius,
    y: (Math.random() - 0.5) * 4,
    z: Math.sin(angle) * radius - 5,
    ox: Math.cos(angle) * radius,
    oy: (Math.random() - 0.5) * 4,
    oz: Math.sin(angle) * radius - 5,
    rx: (Math.random() - 0.5) * 0.3,
    ry: -angle + Math.PI / 2, // Face center
    rz: (Math.random() - 0.5) * 0.1,
    sx: 1,
    sy: 1,
    color: cardColors[i % cardColors.length],
    opacity: 0.0, // Start invisible, fade in at Projects section
    wireframe: true,
    floatSpeed: 0.05 + Math.random() * 0.1,
    floatAmp: 0.3 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    orbitSpeed: 0.02 + Math.random() * 0.03,
    orbitAngle: angle,
    orbitRadius: radius,
  });
}

// Connection lines between cards
const connectionLines = reactive([]);
for (let i = 0; i < CARD_COUNT; i++) {
  const next = (i + 1) % CARD_COUNT;
  connectionLines.push({
    x: 0,
    y: 0,
    z: -5,
    angle: 0,
    length: 1,
    opacity: 0,
  });
}

// Animation loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ elapsed }) => {
  const t = elapsed;
  const isProjectsSection = store.activeSection === "projects";
  const sectionProgress = store.sectionProgress;

  // Target opacity based on section
  const targetOpacity = isProjectsSection ? 0.15 + sectionProgress * 0.15 : 0.0;

  for (let i = 0; i < projectCards.length; i++) {
    const card = projectCards[i];

    // Orbit slowly
    card.orbitAngle += card.orbitSpeed * 0.01;

    // Float position
    card.x = Math.cos(card.orbitAngle) * card.orbitRadius +
      Math.sin(t * card.floatSpeed + card.phase) * card.floatAmp * 0.3;
    card.y = card.oy +
      Math.cos(t * card.floatSpeed * 0.7 + card.phase) * card.floatAmp;
    card.z = Math.sin(card.orbitAngle) * card.orbitRadius - 5;

    // Smooth opacity fade
    card.opacity += (targetOpacity - card.opacity) * 0.03;

    // Subtle rotation
    card.rx += 0.001;
    card.ry = -card.orbitAngle + Math.PI / 2;
  }

  // Update connection lines
  const lineOpacity = isProjectsSection ? 0.05 + sectionProgress * 0.05 : 0;
  for (let i = 0; i < connectionLines.length; i++) {
    const line = connectionLines[i];
    const a = projectCards[i];
    const b = projectCards[(i + 1) % CARD_COUNT];

    line.x = (a.x + b.x) / 2;
    line.y = (a.y + b.y) / 2;
    line.z = (a.z + b.z) / 2;
    line.length = Math.sqrt(
      (b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2
    );
    line.angle = Math.atan2(b.y - a.y, b.x - a.x);
    line.opacity += (lineOpacity - line.opacity) * 0.03;
  }
});
</script>
