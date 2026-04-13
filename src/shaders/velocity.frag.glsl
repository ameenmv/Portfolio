// FBO Velocity Simulation Fragment Shader
// Manages velocity state for particles

uniform float uTime;
uniform float uDelta;
uniform float uScrollVelocity;
uniform float uMorphProgress;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 vel = texture2D(textureVelocity, uv);
  vec4 pos = texture2D(texturePosition, uv);
  
  vec3 velocity = vel.xyz;
  
  // Damping
  velocity *= 0.97;
  
  gl_FragColor = vec4(velocity, 1.0);
}
