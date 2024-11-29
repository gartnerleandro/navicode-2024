"use client";

import Atropos from "atropos/react";
import styles from "./Hero.module.css";

import "atropos/css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.gradientText} role="text">
                Reto Frontend
              </span>
              <span role="text">Navideño 2024</span>
            </h1>
            <p className={styles.description}>
              Desarrolla una experiencia web mágica mientras aprendes tecnologías modernas
            </p>
            <div className={styles.buttons} role="group" aria-label="Opciones de participación">
              <a
                href="/guia"
                className={styles.primaryButton}
                aria-label="Participar en el reto frontend"
              >
                ¡Participa Ahora!
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href="#how-it-works"
                className={styles.secondaryButton}
                aria-label="Más información sobre el reto"
              >
                Saber más
              </a>
            </div>
          </div>

          <div className={styles.visual}>
            <Atropos highlight={false} className={styles.atropos}>
              <div className={styles.codeCard}>
                <div className={styles.codeHeader}>
                  <span className={`${styles.dot} ${styles.red}`}></span>
                  <span className={`${styles.dot} ${styles.yellow}`}></span>
                  <span className={`${styles.dot} ${styles.green}`}></span>
                </div>
                <pre className={styles.code}>
                  <code>{`// 🎅 Santa's AI Chat Assistant
import { createChatBot } from '@north-pole/ai'

const santaBot = createChatBot({
  personality: "friendly & festive",
  knowledge: ["christmas", "gifts", "joy"]
})

async function sendMessage(msg: string) {
  const response = await santaBot.reply({
    message: msg,
    mood: "🎄 navidad",
    addMagic: true
  })
  
  return response.withSparkles() 
}

sendMessage("Llegó la navidad");

// Ho ho ho! ¡Vamos a repartir un poco de alegría! ✨`}</code>
                </pre>
              </div>
            </Atropos>
          </div>
        </div>
      </div>
    </section>
  );
}
