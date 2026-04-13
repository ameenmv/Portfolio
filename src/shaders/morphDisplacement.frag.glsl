// Morph Displacement Fragment Shader
// Colors objects based on displacement amount for dramatic transition visuals.

uniform float uTime;
uniform float uProgress;
uniform vec3 uColorA;   // Base color
uniform vec3 uColorB;   // Melt/hot color
uniform float uOpacity;

varying vec2 vUv;
varying float vDisplacement;
varying vec3 vNormal;

void main() {
  // Color shifts from base to hot based on displacement
  vec3 color = mix(uColorA, uColorB, abs(vDisplacement));
  
  // Edge glow effect
  float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
  color += fresnel * uColorB * 0.5;
  
  // Dissolve at high progress
  float dissolve = step(vDisplacement, 1.0 - uProgress * 0.3);
  
  // Alpha based on progress (fade out as it melts)
  float alpha = uOpacity * (1.0 - uProgress * 0.6) * dissolve;
  
  gl_FragColor = vec4(color, alpha);
}
