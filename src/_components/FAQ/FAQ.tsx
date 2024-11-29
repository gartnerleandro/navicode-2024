"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

type FAQCategory = {
  title: string;
  icon: string;
  questions: {
    question: string;
    answer: React.ReactNode;
  }[];
};

const faqData: FAQCategory[] = [
  {
    title: "Preguntas Generales",
    icon: "🤔",
    questions: [
      {
        question: "¿Necesito ser un experto para participar?",
        answer:
          "No, el reto está diseñado para todos los niveles. Lo importante es aprender y divertirse en el proceso.",
      },
      {
        question: "¿Puedo usar cualquier tecnología?",
        answer:
          "¡Sí! Puedes usar el framework o librería con la que te sientas más cómodo/a. React, Vue, Angular, Svelte... ¡tú eliges!",
      },
      {
        question: "¿Hay una fecha límite?",
        answer:
          "El reto está pensado para completarse durante las fechas navideñas, pero puedes tomarte el tiempo que necesites.",
      },
    ],
  },
  {
    title: "Preguntas Técnicas",
    icon: "🛠️",
    questions: [
      {
        question: "¿Debo implementar todas las funcionalidades?",
        answer:
          "No, puedes elegir las funcionalidades que quieras implementar. Incluso puedes agregar tus propias ideas.",
      },
      {
        question: "¿Puedo usar librerías externas?",
        answer:
          "¡Por supuesto! Te recomendamos usar librerías que te ayuden a aprender y a construir mejor código.",
      },
      {
        question: "¿Necesito una API key para las integraciones?",
        answer:
          "Para algunas funcionalidades (como OpenAI o YouTube) necesitarás tus propias API keys.",
      },
    ],
  },
  {
    title: "Sobre la Comunidad",
    icon: "👥",
    questions: [
      {
        question: "¿Cómo puedo obtener ayuda?",
        answer: (
          <>
            <ul>
              <li>
                Únete a nuestro <a href="https://discord.gg/wjawp6eNr3">servidor de Discord</a>
              </li>
              <li>Revisa las issues en GitHub</li>
              <li>Pregunta en la comunidad</li>
            </ul>
          </>
        ),
      },
      {
        question: "¿Puedo compartir mi solución?",
        answer:
          "¡Claro! Te animamos a que compartas tu proceso y solución final en Discord y redes sociales.",
      },
    ],
  },
];

export function FAQ() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]: !prev[`${categoryIndex}-${questionIndex}`],
    }));
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
        <p className={styles.subtitle}>Todo lo que necesitas saber sobre el reto</p>

        <div className={styles.categories}>
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.category}>
              <button
                className={`${styles.categoryHeader} ${openCategory === categoryIndex ? styles.active : ""}`}
                onClick={() => toggleCategory(categoryIndex)}
                aria-expanded={openCategory === categoryIndex}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryTitle}>{category.title}</span>
                <span className={styles.arrow}>↓</span>
              </button>

              {openCategory === categoryIndex && (
                <div className={styles.questions}>
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className={styles.questionWrapper}>
                      <button
                        className={`${styles.question} ${openQuestions[`${categoryIndex}-${questionIndex}`] ? styles.active : ""}`}
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        aria-expanded={openQuestions[`${categoryIndex}-${questionIndex}`]}
                      >
                        {item.question}
                        <span className={styles.questionArrow}>↓</span>
                      </button>
                      {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                        <div className={styles.answer}>{item.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
