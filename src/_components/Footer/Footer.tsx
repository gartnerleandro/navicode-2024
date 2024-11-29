"use client";
import { motion } from "framer-motion";
import { Youtube, Instagram, X } from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/gartnerleandro",
      icon: <Instagram />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gartner_leandro",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@gartnerleandro",
      icon: <Youtube />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className={styles.credit}>
            Creado con ❤️ por{" "}
            <a href="https://github.com/gartnerleandro" target="_blank" rel="noopener noreferrer">
              gartnerleandro
            </a>
          </p>
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visitar ${link.name}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
