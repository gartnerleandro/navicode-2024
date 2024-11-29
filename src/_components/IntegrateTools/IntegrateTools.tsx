"use client";
import { motion } from "framer-motion";

import styles from "./IntegrateTools.module.css";

const tools = [
  { name: "GitHub", image: "/github.webp", color: "#2b3137", x: "4%", y: "10%" },
  { name: "Angular", image: "/angular.webp", color: "#DD0031", x: "70%", y: "15%" },
  { name: "CSS", image: "/css.webp", color: "#264DE4", x: "15%", y: "60%" },
  { name: "JavaScript", image: "/js.webp", color: "#F7DF1E", x: "65%", y: "70%" },
  { name: "MongoDB", image: "/mongo.webp", color: "#47A248", x: "10%", y: "30%" },
  { name: "Nextjs", image: "/next.webp", color: "#000000", x: "75%", y: "40%" },
  { name: "React", image: "/react.webp", color: "#61DAFB", x: "25%", y: "80%" },
  { name: "SQL", image: "/sql.webp", color: "#00618A", x: "85%", y: "25%" },
  { name: "Svelte", image: "/svelte.webp", color: "#FF3E00", x: "40%", y: "20%" },
  { name: "Vue", image: "/vue.webp", color: "#4FC08D", x: "50%", y: "65%" },
];

export const IntegrateTools = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className={styles.toolIcon}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 0.5,
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
              opacity: 0.8,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            style={{
              left: tool.x,
              top: tool.y,
            }}
          >
            <div
              className={styles.iconWrapper}
              style={{
                backgroundColor: `${tool.color}15`,
              }}
            >
              <img
                loading="lazy"
                src={tool.image}
                alt={tool.name}
                id={tool.name.toLowerCase()}
                width={40}
                height={40}
                className={styles.toolImage}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.content}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Herramientas
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trabaja con tus herramientas favoritas
        </motion.h2>
      </div>
    </section>
  );
};
