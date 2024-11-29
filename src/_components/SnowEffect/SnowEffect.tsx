"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import styles from "./SnowEffect.module.css";

export function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar el tamaño del canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Crear copos de nieve
    const snowflakes: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      wind: number;
    }> = [];

    const createSnowflakes = () => {
      const flakeCount = Math.floor(window.innerWidth / 10); // Cantidad responsive

      for (let i = 0; i < flakeCount; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1, // Tamaño entre 1 y 4px
          speed: Math.random() * 1 + 0.5, // Velocidad entre 0.5 y 1.5
          wind: Math.random() * 0.5 - 0.25, // Viento aleatorio
        });
      }
    };

    createSnowflakes();

    // Animar los copos de nieve
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(255, 255, 255, ${theme === "light" ? 0.5 : 0.8})`;
      ctx.beginPath();

      snowflakes.forEach((flake) => {
        // Dibujar copo
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);

        // Actualizar posición
        flake.y += flake.speed;
        flake.x += flake.wind;

        // Reposicionar si sale de la pantalla
        if (flake.y > canvas.height) {
          flake.y = -5;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }
      });

      ctx.fill();
      requestAnimationFrame(animate);
    };

    animate();

    // Manejar resize
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
