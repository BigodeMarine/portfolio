// Importa o CSS do meu Sobre Mim
import Link from "next/link";
import styles from "./about.module.css";

// Componente da página Sobre Mim
export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <img
                    src="/BigodeMarine.webp"
                    alt="Foto de Edson"
                    className={styles.photo}
                />

                <div className={styles.text}>
                    <h1>Sobre Mim</h1>

                    <p>
                        Até o momento meu foco tem sido em Python, sempre interessado em aprender mais e aumentar a minha gama de conhecimento.
                    </p>

                    <p>
                        Durante meus estudos, desenvolvi projetos utilizando
                        componentização, consumo de APIs e boas práticas
                        de organização de código. Busco sempre evoluir tecnicamente, mantendo um código limpo,
                        escalável e alinhado às necessidades do projeto. Curioso? não deixe de conferir alguns dos meus
                        <Link href="/projects" className={styles.link}>
                            projetos.
                        </Link>
                    </p>

                    <p>
                        📧 Email: edson15a7x@hotmail.com <br />
                        💼 GitHub: github.com/BigodeMarine
                    </p>

                </div>
            </div>
        </section>
    );
}
