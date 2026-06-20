import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Particles = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let mouse = { x: null, y: null };
    let animationId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // 🔥 SIZE BADA KARO — 2 se 6px
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        // 🔥 OPACITY BADA KARO — 0.4 se 0.8
        this.opacity = Math.random() * 0.4 + 0.4;
        this.originalX = this.x;
        this.originalY = this.y;
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = (200 - distance) / 200;
            this.x -= dx * force * 0.04;
            this.y -= dy * force * 0.04;
          } else {
            this.x += (this.originalX - this.x) * 0.008;
            this.y += (this.originalY - this.y) * 0.008;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) { this.x = 0; this.originalX = this.x; }
        if (this.x < 0) { this.x = width; this.originalX = this.x; }
        if (this.y > height) { this.y = 0; this.originalY = this.y; }
        if (this.y < 0) { this.y = height; this.originalY = this.y; }
      }

      draw() {
        // 🔥 COLOR — Light mode mein dark green, Dark mode mein gold
        const color = isDark ? '199, 154, 69' : '26, 92, 58';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.fill();
        
        // 🔥 GLOW EFFECT — Har particle ke around glow
        ctx.shadowColor = isDark ? `rgba(199, 154, 69, 0.3)` : `rgba(26, 92, 58, 0.2)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      // 🔥 PARTICLES COUNT BADA KARO
      const count = Math.min(Math.floor((width * height) / 8000), 200);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            // 🔥 LINE COLOR — Dark mode mein gold, Light mode mein green
            const color = isDark ? '199, 154, 69' : '26, 92, 58';
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color}, ${opacity * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawLines();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 1
      }}
    />
  );
};

export default Particles;