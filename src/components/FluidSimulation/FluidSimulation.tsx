"use client";

import React, { useEffect, useRef } from "react";
import styles from "./FluidSimulation.module.css";

interface KoiFish {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  size: number;
  color: string;
  accentColor: string;
  tailPhase: number;
  swimSpeed: number;
}

interface PondLeaf {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  rot: number;
  rotSpeed: number;
}

interface PondRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

export default function FluidSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);

  // Mouse state
  const mouseRef = useRef({
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle resizing
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Vector field resolution variables
    const GRID_SIZE = 36;
    let gridW = Math.ceil(canvas.width / GRID_SIZE);
    let gridH = Math.ceil(canvas.height / GRID_SIZE);
    const numCells = gridW * gridH;

    // Pond water flow fields
    let u = new Float32Array(numCells);      // Current X velocity
    let v = new Float32Array(numCells);      // Current Y velocity
    let uPrev = new Float32Array(numCells);  
    let vPrev = new Float32Array(numCells);  

    // Interactive Ripples catalog
    const ripples: PondRipple[] = [];

    // Floating Lotus Leaves & Sakura Petals
    const leaves: PondLeaf[] = [];
    const MAX_LEAVES = 80;

    // Procedural Koi Carps flock
    const koiFlock: KoiFish[] = [];
    const KOI_COUNT = 12;

    const koiColors = [
      { base: "#ffffff", accent: "#f97316" }, // Kohaku (White & Orange)
      { base: "#f97316", accent: "#09090b" }, // Showa (Orange & Black)
      { base: "#ffffff", accent: "#ef4444" }, // Red & White
      { base: "#f59e0b", accent: "#d97706" }  // Yamabuki (Golden Yellow)
    ];

    // Initialize Koi Fish
    for (let i = 0; i < KOI_COUNT; i++) {
      const colorScheme = koiColors[i % koiColors.length];
      koiFlock.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        angle: Math.random() * Math.PI * 2,
        size: 14 + Math.random() * 8, // Length scale
        color: colorScheme.base,
        accentColor: colorScheme.accent,
        tailPhase: Math.random() * Math.PI * 2,
        swimSpeed: 0.2 + Math.random() * 0.2
      });
    }

    const createLeaf = (x: number, y: number): PondLeaf => {
      const isPetal = Math.random() < 0.35;
      // Sakura Pink (#f472b6) or Moss Green (#047857)
      const color = isPetal ? "#f472b6" : "#0f766e";
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 2.5 + Math.random() * 3.5,
        color,
        life: 0,
        maxLife: 200 + Math.random() * 150,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02
      };
    };

    // Helper for 2D cell coordinate mappings
    const getIdx = (x: number, y: number) => {
      const tx = Math.max(0, Math.min(gridW - 1, x));
      const ty = Math.max(0, Math.min(gridH - 1, y));
      return ty * gridW + tx;
    };

    // Mouse surface disturbances
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const mouse = mouseRef.current;
      if (!mouse.active) {
        mouse.px = mx;
        mouse.py = my;
        mouse.active = true;
      } else {
        mouse.px = mouse.x;
        mouse.py = mouse.y;
      }
      mouse.x = mx;
      mouse.y = my;

      const dx = mouse.x - mouse.px;
      const dy = mouse.y - mouse.py;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 1.5) {
        const cellX = Math.floor(mouse.x / GRID_SIZE);
        const cellY = Math.floor(mouse.y / GRID_SIZE);
        const idx = getIdx(cellX, cellY);

        // Inject directional vector forces into pond grid cells
        const forceFactor = 0.55;
        u[idx] += dx * forceFactor;
        v[idx] += dy * forceFactor;

        // Spread ripples
        if (Math.random() < 0.18) {
          ripples.push({
            x: mouse.x,
            y: mouse.y,
            radius: 2,
            maxRadius: 40 + speed * 2.5,
            opacity: 0.6,
            speed: 1.2 + speed * 0.05
          });
        }

        // Spawn falling sakura leaves
        if (leaves.length < MAX_LEAVES && Math.random() < 0.3) {
          leaves.push(createLeaf(mouse.x + (Math.random() - 0.5) * 20, mouse.y + (Math.random() - 0.5) * 20));
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Dynamic procedural Koi Fish drawing logic
    const drawKoi = (fish: KoiFish) => {
      ctx.save();
      ctx.translate(fish.x, fish.y);
      ctx.rotate(fish.angle);

      const len = fish.size;
      const width = len * 0.38;

      // 1. Draw Pectoral Side Fins
      ctx.fillStyle = fish.color;
      ctx.beginPath();
      ctx.ellipse(-len * 0.1, -width * 0.9, len * 0.25, width * 0.4, -Math.PI / 4, 0, Math.PI * 2);
      ctx.ellipse(-len * 0.1, width * 0.9, len * 0.25, width * 0.4, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Sleek Almond Main Body
      const gradient = ctx.createRadialGradient(-len * 0.2, 0, 1, 0, 0, len);
      gradient.addColorStop(0, fish.color);
      gradient.addColorStop(0.45, fish.color);
      gradient.addColorStop(1, fish.accentColor);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, len * 0.55, width * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Draw custom organic red/orange pattern spots on the Kohaku's back
      ctx.fillStyle = fish.accentColor;
      ctx.beginPath();
      ctx.arc(-len * 0.12, -width * 0.15, len * 0.14, 0, Math.PI * 2);
      ctx.arc(len * 0.12, width * 0.08, len * 0.1, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw Procedural Wiggling tail sections
      const tailWiggle = Math.sin(fish.tailPhase) * (len * 0.12);
      const tailX = -len * 0.65;
      const tailY = tailWiggle;

      // Tail Joint body connect
      ctx.fillStyle = fish.color;
      ctx.beginPath();
      ctx.moveTo(-len * 0.35, -width * 0.3);
      ctx.quadraticCurveTo(-len * 0.5, tailY * 0.5, tailX, tailY);
      ctx.quadraticCurveTo(-len * 0.5, tailY * 0.5, -len * 0.35, width * 0.3);
      ctx.closePath();
      ctx.fill();

      // Draw flowing transparent Koi tail fin
      ctx.fillStyle = fish.accentColor;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.bezierCurveTo(tailX - len * 0.35, tailY - len * 0.25, tailX - len * 0.2, tailY - len * 0.05, tailX - len * 0.4, tailY - len * 0.05);
      ctx.bezierCurveTo(tailX - len * 0.2, tailY, tailX - len * 0.35, tailY + len * 0.25, tailX, tailY);
      ctx.closePath();
      ctx.fill();

      // 4. Draw Small Eyes
      ctx.fillStyle = "#111827";
      ctx.beginPath();
      ctx.arc(len * 0.35, -width * 0.35, 1.8, 0, Math.PI * 2);
      ctx.arc(len * 0.35, width * 0.35, 1.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      ctx.globalAlpha = 1.0;
    };

    // Main solver and renderer loop
    const update = () => {
      gridW = Math.ceil(canvas.width / GRID_SIZE);
      gridH = Math.ceil(canvas.height / GRID_SIZE);

      // Deep, dark forest-moss green pond water background
      ctx.fillStyle = "#050805";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ambient drift: spawn drifting Sakura petals/leaves passively
      if (leaves.length < MAX_LEAVES - 20 && Math.random() < 0.1) {
        leaves.push(createLeaf(Math.random() * canvas.width, Math.random() * canvas.height));
      }

      // 1. Solve Water Flow Fields (Decay and Diffusion)
      const dampening = 0.97;
      for (let i = 0; i < numCells; i++) {
        uPrev[i] = u[i];
        vPrev[i] = v[i];
        u[i] *= dampening;
        v[i] *= dampening;
      }

      const diffCoeff = 0.07;
      for (let y = 1; y < gridH - 1; y++) {
        for (let x = 1; x < gridW - 1; x++) {
          const idx = y * gridW + x;
          const sumU = uPrev[idx - 1] + uPrev[idx + 1] + uPrev[idx - gridW] + uPrev[idx + gridW];
          const sumV = vPrev[idx - 1] + vPrev[idx + 1] + vPrev[idx - gridW] + vPrev[idx + gridW];
          u[idx] += diffCoeff * (sumU - 4 * uPrev[idx]);
          v[idx] += diffCoeff * (sumV - 4 * vPrev[idx]);
        }
      }

      // 2. Solve & Draw Water Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.opacity = (1 - r.radius / r.maxRadius) * 0.55;

        if (r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw elegant circular concentric ripples
        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.globalAlpha = r.opacity;
        ctx.stroke();

        ctx.strokeStyle = "rgba(249, 115, 22, 0.15)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;

      // 3. Update & Draw Passive Lotus Leaves & Pink Petals
      for (let i = leaves.length - 1; i >= 0; i--) {
        const leaf = leaves[i];
        leaf.life++;

        if (leaf.life >= leaf.maxLife) {
          leaves.splice(i, 1);
          continue;
        }

        const cellX = Math.floor(leaf.x / GRID_SIZE);
        const cellY = Math.floor(leaf.y / GRID_SIZE);
        const idx = getIdx(cellX, cellY);

        const currentU = u[idx];
        const currentV = v[idx];

        // Passive drift on current
        leaf.vx = leaf.vx * 0.93 + currentU * 0.07;
        leaf.vy = leaf.vy * 0.93 + currentV * 0.07;
        
        leaf.x += leaf.vx;
        leaf.y += leaf.vy;
        leaf.rot += leaf.rotSpeed + Math.sqrt(leaf.vx * leaf.vx + leaf.vy * leaf.vy) * 0.01;

        // Apply slight friction damping
        leaf.vx *= 0.98;
        leaf.vy *= 0.98;

        // Wrap around pond margins
        if (leaf.x < -10) leaf.x = canvas.width + 10;
        if (leaf.x > canvas.width + 10) leaf.x = -10;
        if (leaf.y < -10) leaf.y = canvas.height + 10;
        if (leaf.y > canvas.height + 10) leaf.y = -10;

        // Draw leaf or petal
        const opacity = Math.sin((leaf.life / leaf.maxLife) * Math.PI) * 0.65;
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rot);

        ctx.fillStyle = leaf.color;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        
        if (leaf.color === "#f472b6") {
          // Draw pink sakura oval petal shape
          ctx.ellipse(0, 0, leaf.size * 1.5, leaf.size * 0.85, 0, 0, Math.PI * 2);
        } else {
          // Draw classic green circular lotus leaf with a small slit
          ctx.arc(0, 0, leaf.size * 1.4, 0, Math.PI * 1.85);
          ctx.lineTo(0, 0);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1.0;

      // 4. Solve & Render Procedural Koi Carps flock
      koiFlock.forEach((koi) => {
        const cellX = Math.floor(koi.x / GRID_SIZE);
        const cellY = Math.floor(koi.y / GRID_SIZE);
        const idx = getIdx(cellX, cellY);

        const currentU = u[idx];
        const currentV = v[idx];
        const currentSpeed = Math.sqrt(currentU * currentU + currentV * currentV);

        // Ambient swim mechanics: Carps swim forward in direction of heading
        let targetAngle = koi.angle;

        if (currentSpeed > 0.4) {
          // React to water current vector: align heading with flow direction
          targetAngle = Math.atan2(currentV, currentU);

          // Push fish forward by water current speed
          koi.vx = koi.vx * 0.94 + currentU * 0.08;
          koi.vy = koi.vy * 0.94 + currentV * 0.08;
          
          // Speed up tail wiggling when caught in water current
          koi.tailPhase += 0.22 + currentSpeed * 0.02;
        } else {
          // Ambient gentle wandering force
          koi.tailPhase += 0.06;
          
          // Random slight turn to wanders naturally
          if (Math.random() < 0.02) {
            targetAngle += (Math.random() - 0.5) * 1.2;
          }

          // Move fish forward in direction of heading
          const wanderForce = koi.swimSpeed;
          koi.vx = koi.vx * 0.95 + Math.cos(koi.angle) * wanderForce * 0.05;
          koi.vy = koi.vy * 0.95 + Math.sin(koi.angle) * wanderForce * 0.05;
        }

        // Steer angle smoothly toward target
        let angleDiff = targetAngle - koi.angle;
        // Normalize angle difference to [-PI, PI]
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        koi.angle += angleDiff * 0.08;

        // Apply velocity coordinates
        koi.x += koi.vx;
        koi.y += koi.vy;

        // Dampen speeds
        koi.vx *= 0.98;
        koi.vy *= 0.98;

        // Smooth boundaries rebound (steer away from walls)
        const margin = 50;
        const steerForce = 0.08;
        if (koi.x < margin) koi.vx += steerForce;
        if (koi.x > canvas.width - margin) koi.vx -= steerForce;
        if (koi.y < margin) koi.vy += steerForce;
        if (koi.y > canvas.height - margin) koi.vy -= steerForce;

        // Render Koi Carp
        drawKoi(koi);
      });

      requestRef.current = requestAnimationFrame(update);
    };

    update();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
