"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

import styles from "./HowItWorks.module.css";

// Componente para números animados
const AnimatedNumber = ({ value, text }: { value: number; text: string }) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true });

  useEffect(() => {
    if (isInView && numberRef.current) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(latest).toString();
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.statNumber}>
        <span ref={numberRef}>0</span>+
      </span>
      <span className={styles.statText}>{text}</span>
    </motion.div>
  );
};

export function HowItWorks() {
  const steps = [
    {
      icon: "🎯",
      title: "Objetivo",
      description:
        "Crea una web navideña interactiva implementando diferentes funcionalidades mientras practicas tus habilidades de frontend.",
    },
    {
      icon: "📋",
      title: "Requisitos",
      description:
        "La web debe incluir el mayor número de funcionalidades posibles que se indican en el README del repositorio en github.",
    },
    {
      icon: "💪",
      title: "A tu ritmo",
      description:
        "Implementa las funcionalidades en el orden que prefieras. Lo importante es aprender y mejorar tus habilidades.",
    },
    {
      icon: "🤝",
      title: "Comunidad",
      description:
        "Únete a nuestro Discord para compartir dudas, avances y ayudar a otros desarrolladores. ¡Aprenderemos juntos!",
    },
  ];

  const features = [
    "🌙 Modo claro/oscuro",
    "⏰ Cuenta regresiva",
    "📝 Lista de regalos",
    "🎮 Mini juegos",
    "🎵 Reproductor de villancicos",
    "📸 Galería de recuerdos",
    "🤖 Integración con IA",
    "📱 Diseño responsive",
  ];

  const stats = [
    {
      value: 14,
      text: "Funcionalidades para implementar en tu proyecto",
    },
    {
      value: 12,
      text: "Horas estimadas de práctica y aprendizaje",
    },
    {
      value: 8,
      text: "Tecnologías diferentes para dominar",
    },
    {
      value: 100,
      text: "Líneas de código que mejorarán tus habilidades",
    },
  ];

  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cómo funciona el reto?
        </motion.h2>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <span className={styles.icon}>{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat) => (
            <AnimatedNumber key={stat.text} value={stat.value} text={stat.text} />
          ))}
        </div>

        <div className={styles.features}>
          <motion.h3
            className={styles.featuresTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Características a implementar
          </motion.h3>
          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <motion.div
                key={feature}
                className={styles.featureCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                viewport={{ once: true }}
                title={feature}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <span className={styles.featureIcon}>{feature.split(" ")[0]}</span>
                <span className={styles.featureText}>{feature.split(" ")[1]}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.message}>
          <h3>¿Te animas a participar?</h3>
          <p>
            Recuerda que el objetivo principal es aprender y mejorar. No importa tu nivel de
            experiencia, todos podemos aportar y aprender de los demás.
          </p>
          <div className={styles.cta} role="group" aria-label="Opciones de participación">
            <a
              href="/guia"
              className={styles.primaryButton}
              aria-label="Comenzar el reto de programación"
            >
              Comenzar el Reto
            </a>
            <a
              href="https://discord.gg/wjawp6eNr3"
              className={styles.secondaryButton}
              aria-label="Unirse a la comunidad en Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unirse a la Comunidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
