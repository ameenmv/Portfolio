// FBO Simulation Fragment Shader
// Computes particle positions on the GPU using Frame Buffer Objects
// Each pixel in the texture represents one particle's position (xyz) + life (w)

uniform float uTime;
uniform float uDelta;
uniform vec2 uMouse;            // Normalized mouse position (-1 to 1)
uniform float uMouseStrength;   // Cursor interaction strength
uniform float uScrollVelocity;  // Current scroll speed
uniform float uMorphProgress;   // 0-1 morph toward target formation
uniform sampler2D uOriginalPositions; // Initial random positions
uniform sampler2D uTargetPositions;   // Target formation positions
uniform float uCurlFrequency;
uniform float uCurlAmplitude;

// Simplex noise functions for curl noise
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// Curl noise for organic turbulence
vec3 curlNoise(vec3 p) {
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);
  
  float x = snoise(p + dy) - snoise(p - dy);
  float y = snoise(p + dz) - snoise(p - dz);
  float z = snoise(p + dx) - snoise(p - dx);
  
  return normalize(vec3(x, y, z) / (2.0 * e));
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 pos = texture2D(texturePosition, uv);
  vec4 vel = texture2D(textureVelocity, uv);
  vec4 original = texture2D(uOriginalPositions, uv);
  vec4 target = texture2D(uTargetPositions, uv);
  
  vec3 position = pos.xyz;
  vec3 velocity = vel.xyz;
  float life = pos.w;
  
  // === MORPH TOWARD TARGET ===
  vec3 toTarget = mix(original.xyz, target.xyz, uMorphProgress) - position;
  float morphForce = smoothstep(0.0, 1.0, uMorphProgress) * 0.02;
  velocity += toTarget * morphForce;
  
  // === CURSOR INTERACTION (Repulsion/Attraction) ===
  vec3 mousePos3D = vec3(uMouse * 5.0, 0.0);
  vec3 toCursor = position - mousePos3D;
  float dist = length(toCursor);
  float cursorForce = uMouseStrength / (dist * dist + 0.5);
  velocity += normalize(toCursor) * cursorForce * 0.3;
  
  // === CURL NOISE TURBULENCE (scroll-driven) ===
  float turbulenceStrength = abs(uScrollVelocity) * uCurlAmplitude;
  vec3 curl = curlNoise(position * uCurlFrequency + uTime * 0.15);
  velocity += curl * turbulenceStrength;
  
  // === IDLE ORGANIC MOTION ===
  float idleNoise = snoise(position * 0.3 + uTime * 0.08);
  velocity += vec3(
    sin(uTime * 0.2 + position.y * 0.5) * 0.002,
    cos(uTime * 0.15 + position.x * 0.5) * 0.002,
    sin(uTime * 0.1 + position.z * 0.3) * 0.001
  ) * (1.0 - uMorphProgress);
  
  // === GRAVITY-LIKE FORCE (anti-gravity = pushing outward subtly) ===
  float distFromCenter = length(position);
  vec3 antiGrav = normalize(position) * 0.0005 * (1.0 - uMorphProgress);
  velocity += antiGrav;
  
  // === DAMPING ===
  velocity *= 0.96;
  
  // === INTEGRATE ===
  position += velocity * uDelta * 60.0;
  
  // === BOUNDARY (soft containment sphere) ===
  float maxDist = 12.0;
  if (length(position) > maxDist) {
    position = normalize(position) * maxDist;
    velocity *= -0.3; // Bounce
  }
  
  gl_FragColor = vec4(position, life);
}
