// Particle Render Vertex Shader
// Reads positions from FBO texture and renders as points

uniform sampler2D uPositionTexture;
uniform float uPointSize;
uniform float uPixelRatio;
uniform float uTime;

attribute vec2 reference; // UV coordinate to look up position in FBO

varying vec3 vPosition;
varying float vLife;
varying float vSpeed;

void main() {
  // Read position from FBO texture
  vec4 posData = texture2D(uPositionTexture, reference);
  vec3 pos = posData.xyz;
  vLife = posData.w;
  
  // Calculate speed for color
  vSpeed = length(pos - cameraPosition) * 0.05;
  
  vPosition = pos;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  // Size attenuation — particles get smaller when far away
  float sizeAtten = uPointSize * uPixelRatio * (300.0 / -mvPosition.z);
  
  // Subtle size pulsing
  float pulse = 1.0 + sin(uTime * 2.0 + pos.x * 3.0 + pos.y * 5.0) * 0.15;
  
  gl_PointSize = max(sizeAtten * pulse, 0.5);
}
