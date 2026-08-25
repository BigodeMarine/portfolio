"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

// Componente do Header
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleLinkClick() {
        setMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            {/* Botão do menu hambúrguer */}
            <button
                className={`${styles.menuButton} ${menuOpen ? styles.open : ""
                    }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menu de navegação */}
            <nav className={menuOpen ? styles.navOpen : ""}>
                <Link href="/" onClick={handleLinkClick}>
                    Home
                </Link>

                <Link href="/about" onClick={handleLinkClick}>
                    Sobre
                </Link>

                <Link href="/projects" onClick={handleLinkClick}>
                    Projetos
                </Link>

                <Link href="/skills" onClick={handleLinkClick}>
                    Habilidades
                </Link>

                <Link href="/contact" onClick={handleLinkClick}>
                    Contato
                </Link>
            </nav>
        </header>
    );
}

