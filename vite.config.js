import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import glsl from "vite-plugin-glsl";
import { templateCompilerOptions } from "@tresjs/core";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
    tailwindcss(),
    glsl(),
  ],
  base: "/",
  build: {
    // Target modern browsers for smaller bundles
    target: "es2020",
    // Increase chunk size warning limit (Three.js is large)
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js into its own chunk (~600KB)
          three: ["three"],
          // Split TresJS ecosystem
          tresjs: [
            "@tresjs/core",
            "@tresjs/cientos",
            "@tresjs/post-processing",
          ],
          // Split GSAP
          gsap: ["gsap"],
          // Split Vue ecosystem
          vendor: ["vue", "vue-router", "pinia"],
        },
      },
    },
  },
});
