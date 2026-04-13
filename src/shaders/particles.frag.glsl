// Particle Render Fragment Shader
// Renders particles as soft glowing circles with velocity-based coloring

uniform float uTime;
uniform vec3 uColorA;  // Cool color (slow particles)
uniform vec3 uColorB;  // Hot color (fast particles)
uniform float uOpacity;

varying vec3 vPosition;
varying float vLife;
varying float vSpeed;

void main() {
  // Circular point shape with soft edge
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);
  
  // Discard pixels outside circle
  if (dist > 0.5) discard;
  
  // Soft glow falloff
  float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
  alpha *= alpha; // Quadratic falloff for glow effect
  
  // Color based on speed: slow = cool, fast = hot
  float speedNorm = clamp(vSpeed, 0.0, 1.0);
  vec3 color = mix(uColorA, uColorB, speedNorm);
  
  // Subtle shimmer
  float shimmer = sin(uTime * 3.0 + vPosition.x * 10.0 + vPosition.y * 7.0) * 0.1 + 0.9;
  color *= shimmer;
  
  // Depth-based fog (particles farther away are dimmer)
  float depth = length(vPosition) * 0.08;
  alpha *= exp(-depth * depth * 0.5);
  
  gl_FragColor = vec4(color, alpha * uOpacity);
}
