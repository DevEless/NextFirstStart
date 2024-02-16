import Image from "next/image";
import Link from 'next/link';

import styles from "../styles/Pages.module.css"

export default function Home() {

  return (
    <main className={styles.display}>


      <img className={styles.kadri} src="https://media.discordapp.net/attachments/1036624106801614878/1176187954549489755/614332d7e594c057369b4ded_Oeuf-1.png?ex=65dcb364&is=65ca3e64&hm=6cdc984500eaa1c7d21d9b977067b6f0ab5f999cb43e8fc3ffe2be54e9b91604&=&format=webp&quality=lossless&width=662&height=662" alt="" />


      <h2 className={styles.k3}> Mon Ancien coach Kadri</h2> 

      <Link className={styles.button} href="./about" Id={styles.button}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Voir Kadri en colere
  </Link>



    </main>
  )
}
