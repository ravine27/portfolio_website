"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";

// ─── Technology Data ──────────────────────────────────────────────────────────
const TECHNOLOGIES = [
  { name: "React",        cls: "devicon-react-original colored" },
  { name: "TypeScript",   cls: "devicon-typescript-plain colored" },
  { name: "JavaScript",   cls: "devicon-javascript-plain colored" },
  { name: "Node.js",      cls: "devicon-nodejs-plain colored" },
  { name: "Express.js",   cls: "devicon-express-original inverted-icon" },
  { name: "MongoDB",      cls: "devicon-mongodb-plain colored" },
  { name: "Firebase",     cls: "devicon-firebase-plain colored" },
  { name: "Git",          cls: "devicon-git-plain colored" },
  { name: "GitHub",       cls: "devicon-github-original inverted-icon" },
  { name: "Python",       cls: "devicon-python-plain colored" },
  { name: "Java",         cls: "devicon-java-plain colored" },
  { name: "C++",          cls: "devicon-cplusplus-plain colored" },
  { name: "HTML5",        cls: "devicon-html5-plain colored" },
  { name: "CSS3",         cls: "devicon-css3-plain colored" },
  { name: "Android",      cls: "devicon-android-plain colored" },
  { name: "SQLite",       cls: "devicon-sqlite-plain colored" },
  { name: "VS Code",      cls: "devicon-vscode-plain colored" },
  { name: "React Native", cls: "devicon-react-original colored" },
];

// ─── Constants ────────────────────────────────────────────────────────────────
const AUTO_ROT_Y   = 0.00090; // slow elegant y-rotation
const AUTO_ROT_X   = 0.00020; // very gentle x drift
const INERTIA      = 0.92;    // drag release decay
const DRAG_SPEED   = 0.004;   // drag sensitivity
const TILT_FACTOR  = 0.055;   // mouse parallax tilt max (radians)
const TILT_LERP    = 0.035;   // parallax interpolation speed
const INR_CUTOFF   = 0.0001;  // velocity cutoff for inertia stop

// ─── Fibonacci Sphere (improved — avoids pole clustering) ─────────────────────
function fibonacciSphere(n: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  // Use a slight offset to push points away from exact poles
  const offset = 0.5;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399 rad

  for (let i = 0; i < n; i++) {
    // y from +1 to -1 with offset for better pole distribution
    const y = 1 - ((i + offset) / (n - 1 + 2 * offset)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = goldenAngle * i;
    pts.push(
      new THREE.Vector3(
        radius * r * Math.cos(phi),
        radius * y,
        radius * r * Math.sin(phi)
      )
    );
  }
  return pts;
}

// ─── Lerp helper ──────────────────────────────────────────────────────────────
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// ─── Star Field ───────────────────────────────────────────────────────────────
function buildStarField(): THREE.Points {
  const count = 1400;
  const pos = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    // Distribute in a large sphere shell, not a box, for natural look
    const r = 600 + Math.random() * 800;
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;
    pos[i * 3]     = r * Math.sin(theta) * Math.cos(phi);
    pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    pos[i * 3 + 2] = r * Math.cos(theta);
    sizes[i] = 0.6 + Math.random() * 1.4;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.PointsMaterial({
    color: 0xdde8ff,
    size: 1.2,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.45,
  });
  return new THREE.Points(geo, mat);
}

// ─── Wireframe Globe (WebGL) ──────────────────────────────────────────────────
function buildWireframeGlobe(
  glGroup: THREE.Group,
  radius: number
): { primary: THREE.Mesh; secondary: THREE.Mesh } {
  // Primary: clean, low-segment orange wireframe
  const geo1 = new THREE.SphereGeometry(radius, 12, 8);
  const mat1 = new THREE.MeshBasicMaterial({
    color: 0xffb86c,
    wireframe: true,
    transparent: true,
    opacity: 0.11,
  });
  const primary = new THREE.Mesh(geo1, mat1);
  glGroup.add(primary);

  // Secondary: even sparser inner sphere for depth
  const geo2 = new THREE.SphereGeometry(radius * 0.97, 7, 5);
  const mat2 = new THREE.MeshBasicMaterial({
    color: 0x75d4e8,
    wireframe: true,
    transparent: true,
    opacity: 0.045,
  });
  const secondary = new THREE.Mesh(geo2, mat2);
  glGroup.add(secondary);

  // Two subtle orbit rings (not three — less clutter)
  const ringConfigs = [
    { tiltX: 0.3,  tiltZ: 0.1,  color: 0xffb86c, opacity: 0.09 },
    { tiltX: -0.5, tiltZ: 0.6,  color: 0x75d4e8, opacity: 0.07 },
  ];
  ringConfigs.forEach(({ tiltX, tiltZ, color, opacity }) => {
    const rGeo = new THREE.TorusGeometry(radius * 1.03, 0.35, 2, 100);
    const rMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(rGeo, rMat);
    ring.rotation.x = tiltX;
    ring.rotation.z = tiltZ;
    glGroup.add(ring);
  });

  return { primary, secondary };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TechGlobe() {
  const mountRef    = useRef<HTMLDivElement>(null); // shared mount for both renderers
  const cssWrapRef  = useRef<HTMLDivElement>(null); // CSS3D renderer goes here

  useEffect(() => {
    const mount    = mountRef.current;
    const cssWrap  = cssWrapRef.current;
    if (!mount || !cssWrap) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;
    // Radius: ~36% of shorter dimension, capped for very large screens
    const RADIUS = Math.min(W * 0.36, H * 0.40, 220);

    // ── Two Scenes ────────────────────────────────────────────────────────────
    const cssScene = new THREE.Scene();
    const glScene  = new THREE.Scene();

    // ── Shared Camera ─────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(42, W / H, 1, 4000);
    camera.position.z = RADIUS * 3.1;

    // ── WebGL Renderer (stars + wireframe, pointer-events: none) ──────────────
    const glRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    glRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    glRenderer.setSize(W, H);
    glRenderer.setClearColor(0x000000, 0);
    Object.assign(glRenderer.domElement.style, {
      position: "absolute", top: "0", left: "0",
      pointerEvents: "none", zIndex: "1",
    });
    mount.appendChild(glRenderer.domElement);

    // ── CSS3D Renderer (icons, receives pointer events for drag) ──────────────
    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(W, H);
    Object.assign(cssRenderer.domElement.style, {
      position: "absolute", top: "0", left: "0", zIndex: "2",
    });
    cssWrap.appendChild(cssRenderer.domElement);
    cssRenderer.domElement.style.cursor = "grab";

    // ── Build GL Scene ────────────────────────────────────────────────────────
    glScene.add(buildStarField());
    const glGlobeGroup = new THREE.Group();
    glScene.add(glGlobeGroup);
    const { primary: wfPrimary, secondary: wfSecondary } =
      buildWireframeGlobe(glGlobeGroup, RADIUS);

    // ── Build CSS Scene ───────────────────────────────────────────────────────
    const cssGlobeGroup = new THREE.Group();
    cssScene.add(cssGlobeGroup);

    // Fibonacci-distributed icon positions
    const positions = fibonacciSphere(TECHNOLOGIES.length, RADIUS);

    // Store inner divs for depth updates via CSS custom property
    // The CSS reads --ds and applies scale() — hover composes on top cleanly
    const innerEls: HTMLElement[] = [];

    TECHNOLOGIES.forEach((tech, i) => {
      // Outer wrapper — CSS3DRenderer writes its matrix3d here, NEVER touch this
      const outer = document.createElement("div");
      outer.className = "tech-node";

      // Inner wrapper — depth scale via CSS var(--ds), hover via CSS :hover
      const inner = document.createElement("div");
      inner.className = "tech-node-inner";
      // Seed the custom property so there's no flash on first frame
      inner.style.setProperty("--ds", "1");
      inner.innerHTML = `
        <i class="${tech.cls} tech-node-icon"></i>
        <span class="tech-node-label">${tech.name}</span>
      `;
      outer.appendChild(inner);
      innerEls.push(inner);

      const obj = new CSS3DObject(outer);
      obj.position.copy(positions[i]);

      // Orient icon to always face the camera (face outward from sphere center)
      // lookAt center then flip Y 180° so the face points outward
      obj.lookAt(new THREE.Vector3(0, 0, 0));
      obj.rotateY(Math.PI);

      cssGlobeGroup.add(obj);
    });

    // ── Physics State ─────────────────────────────────────────────────────────
    let isDragging  = false;
    let prevX       = 0;
    let prevY       = 0;
    let velX        = 0;
    let velY        = 0;
    let rotY        = 0;
    let rotX        = 0;

    // Parallax tilt (mouse hover, not drag)
    let tiltTargetX = 0;
    let tiltTargetY = 0;
    let tiltCurX    = 0;
    let tiltCurY    = 0;

    // ── Input ─────────────────────────────────────────────────────────────────
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      velX = velY = 0;
      cssRenderer.domElement.style.cursor = "grabbing";
      cssRenderer.domElement.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        velX = dx * DRAG_SPEED;
        velY = dy * DRAG_SPEED;
        rotY += velX;
        rotX += velY;
        // Clamp vertical to avoid flipping upside down
        rotX = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, rotX));
        prevX = e.clientX;
        prevY = e.clientY;
      } else {
        // Subtle parallax tilt based on mouse position in container
        const rect = mount.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / W - 0.5) * 2; // -1..1
        const ny = ((e.clientY - rect.top)  / H - 0.5) * 2;
        tiltTargetX = -ny * TILT_FACTOR;
        tiltTargetY =  nx * TILT_FACTOR;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      cssRenderer.domElement.style.cursor = "grab";
    };

    const cssEl = cssRenderer.domElement;
    cssEl.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup",   onPointerUp);

    // ── Reusable vector to avoid per-frame allocation ─────────────────────────
    const worldPos = new THREE.Vector3();

    // ── Animation Loop ────────────────────────────────────────────────────────
    let rafId = 0;

    const animate = (time: number) => {
      rafId = requestAnimationFrame(animate);

      if (!isDragging) {
        // Auto-rotation
        rotY += AUTO_ROT_Y;
        rotX += AUTO_ROT_X;

        // Inertia decay (stop completely when negligible)
        velX *= INERTIA;
        velY *= INERTIA;
        if (Math.abs(velX) > INR_CUTOFF) rotY += velX;
        if (Math.abs(velY) > INR_CUTOFF) rotX += velY;

        // Smooth parallax tilt lerp
        tiltCurX = lerp(tiltCurX, tiltTargetX, TILT_LERP);
        tiltCurY = lerp(tiltCurY, tiltTargetY, TILT_LERP);
      }

      // Apply identical rotation to both groups so they stay perfectly aligned
      const finalX = rotX + tiltCurX;
      const finalY = rotY + tiltCurY;

      cssGlobeGroup.rotation.x = finalX;
      cssGlobeGroup.rotation.y = finalY;
      glGlobeGroup.rotation.x  = finalX;
      glGlobeGroup.rotation.y  = finalY;

      // Slight counter-rotation on inner wireframe for premium depth
      wfPrimary.rotation.y   = time * 0.00005;
      wfSecondary.rotation.z = time * -0.00003;

      // ── Depth scaling via CSS custom property ────────────────────────────
      // We set --ds on .tech-node-inner; the CSS does transform: scale(var(--ds))
      // Hover effect composes on top via CSS :hover without JS conflict.
      // CSS3DRenderer owns .tech-node's transform — we never touch that.
      const invRadius = 1 / RADIUS;
      for (let i = 0; i < innerEls.length; i++) {
        cssGlobeGroup.children[i].getWorldPosition(worldPos);
        // depth: 0 (far) → 1 (close)
        const depth = (worldPos.z + RADIUS) * 0.5 * invRadius;
        // Subtle depth scale: 0.86 (far) → 1.06 (close)
        const s = 0.86 + depth * 0.20;
        // Opacity: 0.38 (far) → 0.98 (close)
        const o = 0.38 + depth * 0.60;
        innerEls[i].style.setProperty("--ds", s.toFixed(3));
        innerEls[i].style.opacity = o.toFixed(3);
      }

      cssRenderer.render(cssScene, camera);
      glRenderer.render(glScene, camera);
    };

    animate(0);

    // ── Resize ────────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      glRenderer.setSize(nW, nH);
      cssRenderer.setSize(nW, nH);
    });
    ro.observe(mount);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      cssEl.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup",   onPointerUp);
      glRenderer.dispose();
      if (mount.contains(glRenderer.domElement))
        mount.removeChild(glRenderer.domElement);
      if (cssWrap.contains(cssRenderer.domElement))
        cssWrap.removeChild(cssRenderer.domElement);
    };
  }, []);

  return (
    <div className="tech-globe-root">
      {/* Ambient glow layers — purely decorative, behind everything */}
      <div className="tg-glow tg-glow-amber" />
      <div className="tg-glow tg-glow-teal"  />
      {/* Soft vignette overlay */}
      <div className="tg-vignette" />

      {/* WebGL canvas (stars + wireframe) */}
      <div ref={mountRef}   className="tg-layer" />
      {/* CSS3D canvas (icons) */}
      <div ref={cssWrapRef} className="tg-layer" />
    </div>
  );
}
