/**
 * useAudioReactive — Subtle audio-reactive environment.
 *
 * Loads an ambient audio track, analyzes frequency data via Web Audio API,
 * and feeds reactivity values to the Pinia store for use by particles,
 * post-processing, and camera.
 *
 * Audio is ALWAYS user-initiated (starts on first interaction).
 */
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useWebGLStore } from "../stores/webgl.js";

export function useAudioReactive() {
  const store = useWebGLStore();

  let audioContext = null;
  let analyser = null;
  let source = null;
  let audioElement = null;
  let dataArray = null;
  let rafId = null;
  let isInitialized = false;

  const lowFreq = ref(0); // Bass (0-1)
  const midFreq = ref(0); // Mids (0-1)
  const highFreq = ref(0); // Highs (0-1)

  /**
   * Initialize audio context and analyser (called on user interaction)
   */
  async function init() {
    if (isInitialized) return;

    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;

      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      // Create a subtle ambient drone using oscillators (no external file needed)
      createAmbientDrone();

      isInitialized = true;
      startAnalysis();
    } catch (e) {
      console.warn("Audio initialization failed:", e);
    }
  }

  /**
   * Create a subtle ambient drone using Web Audio API oscillators
   */
  function createAmbientDrone() {
    if (!audioContext) return;

    const masterGain = audioContext.createGain();
    masterGain.gain.value = 0.03; // Very subtle
    masterGain.connect(analyser);
    analyser.connect(audioContext.destination);

    // Deep bass drone
    const osc1 = audioContext.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 55; // A1
    const gain1 = audioContext.createGain();
    gain1.gain.value = 0.4;
    osc1.connect(gain1);
    gain1.connect(masterGain);

    // Sub harmonic
    const osc2 = audioContext.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 82.41; // E2
    const gain2 = audioContext.createGain();
    gain2.gain.value = 0.2;
    osc2.connect(gain2);
    gain2.connect(masterGain);

    // High shimmer
    const osc3 = audioContext.createOscillator();
    osc3.type = "sine";
    osc3.frequency.value = 440; // A4
    const gain3 = audioContext.createGain();
    gain3.gain.value = 0.02;
    osc3.connect(gain3);
    gain3.connect(masterGain);

    // LFO to modulate the shimmer
    const lfo = audioContext.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.1; // Very slow
    const lfoGain = audioContext.createGain();
    lfoGain.gain.value = 0.01;
    lfo.connect(lfoGain);
    lfoGain.connect(gain3.gain);

    // Start all
    osc1.start();
    osc2.start();
    osc3.start();
    lfo.start();

    source = { osc1, osc2, osc3, lfo, masterGain };
  }

  /**
   * Analyze frequency data on each frame
   */
  function startAnalysis() {
    function analyze() {
      if (!analyser || !dataArray) return;

      analyser.getByteFrequencyData(dataArray);

      const bufferLength = analyser.frequencyBinCount;
      const third = Math.floor(bufferLength / 3);

      // Average frequency bands
      let lowSum = 0,
        midSum = 0,
        highSum = 0;
      for (let i = 0; i < third; i++) lowSum += dataArray[i];
      for (let i = third; i < third * 2; i++) midSum += dataArray[i];
      for (let i = third * 2; i < bufferLength; i++) highSum += dataArray[i];

      lowFreq.value = lowSum / (third * 255);
      midFreq.value = midSum / (third * 255);
      highFreq.value = highSum / ((bufferLength - third * 2) * 255);

      // Feed combined reactivity to store
      const combined = lowFreq.value * 0.5 + midFreq.value * 0.3 + highFreq.value * 0.2;
      store.audioReactivity = combined;

      rafId = requestAnimationFrame(analyze);
    }

    analyze();
  }

  /**
   * Toggle audio on/off
   */
  function toggle() {
    if (!isInitialized) {
      init();
      store.audioEnabled = true;
      return;
    }

    if (store.audioEnabled) {
      // Mute
      if (source?.masterGain) {
        source.masterGain.gain.linearRampToValueAtTime(
          0,
          audioContext.currentTime + 0.5
        );
      }
      store.audioEnabled = false;
    } else {
      // Unmute
      if (source?.masterGain) {
        source.masterGain.gain.linearRampToValueAtTime(
          0.03,
          audioContext.currentTime + 0.5
        );
      }
      store.audioEnabled = true;
    }
  }

  /**
   * Cleanup
   */
  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    if (source) {
      source.osc1?.stop();
      source.osc2?.stop();
      source.osc3?.stop();
      source.lfo?.stop();
    }
    if (audioContext) audioContext.close();
  }

  onBeforeUnmount(() => {
    destroy();
  });

  return {
    init,
    toggle,
    destroy,
    lowFreq,
    midFreq,
    highFreq,
  };
}
