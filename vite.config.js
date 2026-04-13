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
});
