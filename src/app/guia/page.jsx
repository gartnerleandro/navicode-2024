"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./guia.module.css";

export default function GuiaPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "¡Bienvenido/a al Reto!",
      content: (
        <>
          <p>Mi nombre es Leandro y seré tu guía en este emocionante reto de programación.</p>
          <p>
            Juntos vamos a crear un proyecto que pondrá a prueba tus habilidades como
            desarrollador/a.
          </p>
        </>
      ),
    },
    {
      title: "¿En qué consiste el reto?",
      content: (
        <>
          <p>El objetivo es crear un proyecto con temática navideña que permita:</p>
          <ul>
            <li>Tener una buena experiencia de usuario</li>
            <li>Ser usable en cualquier dispositivo</li>
            <li>Ser accesible</li>
            <li>Interactuar con un bot de chat inteligente</li>
            <li>...y muchas cosas más</li>
          </ul>
        </>
      ),
    },
    {
      title: "¿Qué aprenderás?",
      content: (
        <>
          <p>Durante este reto, profundizarás en:</p>
          <ul>
            <li>Resolver problemas reales por ti mismo/a</li>
            <li>Trabajar con diferentes APIs</li>
            <li>Nuevas librerías y tecnologías</li>
            <li>Trabajar en un proyecto con una temática concreta</li>
          </ul>
        </>
      ),
    },
    {
      title: "¿Qué debes saber antes de empezar?",
      content: (
        <>
          <p>El resultado final no es lo más importante, sino el proceso de aprendizaje.</p>
          <p>Para ello, es necesario que tengas en cuenta lo siguiente:</p>
          <ul>
            <li>No te centres únicamente en el resultado final</li>
            <li>Presta atención a todos los detalles de tu código</li>
            <li>Utiliza buenas prácticas de programación</li>
            <li>Escribe código limpio y documentado</li>
            <li>Realiza commits frecuentes y descriptivos</li>
            <li>Mantén un README actualizado</li>
          </ul>
        </>
      ),
    },
    {
      title: "Preparando el Entorno",
      content: (
        <>
          <p>Vamos a preparar todo lo necesario:</p>
          <ol>
            <li>
              Accede al{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/gartnerleandro/navicode-2024"
              >
                repositorio en GitHub
              </a>
            </li>
            <li>Lee los requisitos del proyecto</li>
            <li>Crea tu propio repositorio</li>
            <li>Inicializa el proyecto con tu framework/librería favorita</li>
          </ol>
        </>
      ),
    },
    {
      title: "Consejos para Empezar",
      content: (
        <>
          <p>Antes de comenzar a programar:</p>
          <ul>
            <li>Lee la documentación completa del proyecto</li>
            <li>Revisa los issues abiertos en GitHub</li>
            <li>Planifica tu solución antes de empezar a programar</li>
          </ul>
        </>
      ),
    },
    {
      title: "Recursos y Ayuda",
      content: (
        <>
          <p>¿Necesitas ayuda? Tienes varios recursos disponibles:</p>
          <ul>
            <li>
              Únete a nuestro <a href="https://discord.gg/wjawp6eNr3">servidor de Discord</a>
            </li>
            <li>
              Consulta la <a href="https://developer.mozilla.org/es/">documentación técnica</a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "¡Hora de Empezar!",
      content: (
        <>
          <p>Ya tienes todo lo necesario para comenzar el reto.</p>
          <p>
            Recuerda que lo importante no es solo el resultado final, sino también el proceso de
            aprendizaje, dedica el tiempo necesario y disfruta.
          </p>
          <p>¡Mucha suerte! 💪</p>
        </>
      ),
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.onboarding}>
        <div className={styles.avatarContainer}>
          <Image
            src={currentStep !== steps.length - 1 ? "/avatar.webp" : "/avatar-party.webp"}
            alt="Avatar guía"
            width={150}
            height={150}
            className={styles.avatar}
          />
          <div className={styles.speechBubble}>
            <h2>{steps[currentStep].title}</h2>
            <div className={styles.content}>{steps[currentStep].content}</div>
          </div>
        </div>

        <div className={styles.navigation}>
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 0}
            className={styles.navButton}
          >
            Anterior
          </button>

          <div className={styles.progress}>
            {steps.map((_, index) => (
              <div
                key={index}
                className={`${styles.progressDot} ${index === currentStep ? styles.active : ""}`}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>
          {currentStep !== steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              disabled={currentStep === steps.length - 1}
              className={styles.navButton}
            >
              Siguiente
            </button>
          ) : (
            <a
              href="https://github.com/gartnerleandro/navicode-2024"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navButton}
            >
              Comenzar el Reto
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
