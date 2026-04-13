/**
 * useParticleFormations — Generates position textures for particle morph targets.
 *
 * Each formation is encoded as a DataTexture where each pixel's RGBA
 * represents a target x,y,z position (and w for life/metadata).
 */
import * as THREE from "three";

export function useParticleFormations(size = 256) {
  const count = size * size;

  /**
   * Create a DataTexture from position data
   */
  function createTexture(fillFn) {
    const data = new Float32Array(count * 4);
    fillFn(data, count);

    const texture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    texture.needsUpdate = true;
    return texture;
  }

  /**
   * Galaxy spiral formation (default idle state)
   */
  function galaxyFormation() {
    return createTexture((data, count) => {
      for (let i = 0; i < count; i++) {
        const arm = Math.floor(Math.random() * 3); // 3 spiral arms
        const armAngle = (arm / 3) * Math.PI * 2;
        const dist = Math.pow(Math.random(), 0.6) * 8;
        const angle = armAngle + dist * 0.8 + (Math.random() - 0.5) * 0.4;

        data[i * 4] = Math.cos(angle) * dist; // x
        data[i * 4 + 1] = (Math.random() - 0.5) * dist * 0.15; // y (flat)
        data[i * 4 + 2] = Math.sin(angle) * dist; // z
        data[i * 4 + 3] = Math.random(); // life
      }
    });
  }

  /**
   * Sphere formation (About section morph)
   */
  function sphereFormation(radius = 4) {
    return createTexture((data, count) => {
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius + (Math.random() - 0.5) * 0.3;

        data[i * 4] = r * Math.sin(phi) * Math.cos(theta);
        data[i * 4 + 1] = r * Math.sin(phi) * Math.sin(theta);
        data[i * 4 + 2] = r * Math.cos(phi);
        data[i * 4 + 3] = Math.random();
      }
    });
  }

  /**
   * Ring/Torus formation (Projects section — orbital)
   */
  function torusFormation(majorRadius = 5, minorRadius = 1.5) {
    return createTexture((data, count) => {
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        const r = minorRadius + (Math.random() - 0.5) * 0.5;

        data[i * 4] =
          (majorRadius + r * Math.cos(phi)) * Math.cos(theta);
        data[i * 4 + 1] = r * Math.sin(phi);
        data[i * 4 + 2] =
          (majorRadius + r * Math.cos(phi)) * Math.sin(theta);
        data[i * 4 + 3] = Math.random();
      }
    });
  }

  /**
   * Converging core formation (Contact section — pulsing sphere core)
   */
  function coreFormation(radius = 2) {
    return createTexture((data, count) => {
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        // Concentrate particles in center with exponential falloff
        const r = Math.pow(Math.random(), 2) * radius;

        data[i * 4] = r * Math.sin(phi) * Math.cos(theta);
        data[i * 4 + 1] = r * Math.sin(phi) * Math.sin(theta);
        data[i * 4 + 2] = r * Math.cos(phi);
        data[i * 4 + 3] = Math.random();
      }
    });
  }

  /**
   * Scattered formation (wide explosion)
   */
  function scatterFormation(spread = 12) {
    return createTexture((data, count) => {
      for (let i = 0; i < count; i++) {
        data[i * 4] = (Math.random() - 0.5) * spread;
        data[i * 4 + 1] = (Math.random() - 0.5) * spread * 0.6;
        data[i * 4 + 2] = (Math.random() - 0.5) * spread;
        data[i * 4 + 3] = Math.random();
      }
    });
  }

  /**
   * Text formation — generates positions that spell out text
   * Uses a canvas to render text, then samples positions from filled pixels
   */
  function textFormation(text = "AMEEN", spread = 8) {
    return createTexture((data, count) => {
      // Create off-screen canvas
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");

      // Render text
      ctx.fillStyle = "white";
      ctx.font = "bold 48px Oswald, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 128, 32);

      // Get pixel data
      const imageData = ctx.getImageData(0, 0, 256, 64);
      const filledPixels = [];

      for (let y = 0; y < 64; y++) {
        for (let x = 0; x < 256; x++) {
          const idx = (y * 256 + x) * 4;
          if (imageData.data[idx] > 128) {
            filledPixels.push({
              x: (x / 256 - 0.5) * spread,
              y: -(y / 64 - 0.5) * (spread * 0.25),
            });
          }
        }
      }

      // Map particles to text pixels
      for (let i = 0; i < count; i++) {
        if (filledPixels.length > 0) {
          const pixel =
            filledPixels[Math.floor(Math.random() * filledPixels.length)];
          data[i * 4] = pixel.x + (Math.random() - 0.5) * 0.1;
          data[i * 4 + 1] = pixel.y + (Math.random() - 0.5) * 0.1;
          data[i * 4 + 2] = (Math.random() - 0.5) * 0.3;
          data[i * 4 + 3] = Math.random();
        } else {
          // Fallback to random if text sampling fails
          data[i * 4] = (Math.random() - 0.5) * spread;
          data[i * 4 + 1] = (Math.random() - 0.5) * 2;
          data[i * 4 + 2] = (Math.random() - 0.5) * 0.5;
          data[i * 4 + 3] = Math.random();
        }
      }
    });
  }

  return {
    galaxyFormation,
    sphereFormation,
    torusFormation,
    coreFormation,
    scatterFormation,
    textFormation,
  };
}
