import Image from "next/image";
import Link from 'next/link';

import styles from "../styles/Pages.module.css"

export default function About() {

    return (
        <main className={styles.display}>


            <img className={styles.kadri} src="https://static.vecteezy.com/ti/vecteur-libre/p3/26568210-mignonne-en-colere-oeuf-personnage-marrant-furieux-oeuf-dessin-anime-emoticone-dans-plat-style-poussin-emoji-vecteur-illustration-vectoriel.jpg" alt="" />


            <h2 className={styles.k3}> Tu n'as pas rendu ton projet !</h2>

            <Link className={styles.button} href="./" Id={styles.button}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Voir Kadri normal
            </Link>



        </main>
    )
}