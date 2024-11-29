"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

import animationData from "@/../public/menu.json";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

import styles from "./NavBar.module.css";

export function NavBar() {
  const menuButton = useRef<LottieRefCurrentProps>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (menuButton?.current) {
      if (isMenuOpen) {
        menuButton.current.setSpeed(3);
        menuButton.current.playSegments([85, 140]);

        if (typeof window !== null) {
          document.querySelector("html")?.classList.remove("navbar-open");
        }
      } else {
        menuButton.current.setSpeed(3);
        menuButton.current.playSegments([0, 85]);

        if (typeof window !== null) {
          document.querySelector("html")?.classList.add("navbar-open");
        }
      }
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    if (menuButton?.current) {
      menuButton.current.setSpeed(3);
      menuButton.current.playSegments([85, 140]);

      if (typeof window !== null) {
        document.querySelector("html")?.classList.remove("navbar-open");
      }
    }
  };

  if (!mounted) return null;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.webp" alt="navicode logo" width="150" height="44" />
        </Link>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          aria-label="Menú principal"
        >
          <DynamicLottie
            loop={false}
            autoPlay={false}
            initialSegment={[0, 1]}
            lottieRef={menuButton}
            animationData={animationData}
          />
        </button>

        <div
          id="navigation-menu"
          className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}
          role="navigation"
          aria-label="Menú principal"
        >
          <Link href="#how-it-works" onClick={closeMenu}>
            Cómo Funciona
          </Link>
          <Link href="#faq" onClick={closeMenu}>
            FAQs
          </Link>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className={styles.themeToggle}
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <Link href="/guia" className={styles.cta} onClick={closeMenu}>
            Participar
          </Link>
        </div>
      </div>
    </nav>
  );
}
