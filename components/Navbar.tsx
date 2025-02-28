import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer} role="navigation" aria-label="Main Navigation">
      <h1 className={styles.navbarTitle}>Tunja Conectamos con las Obras</h1>
      <div className={styles.navbarLinks}>
        <Link href="/" legacyBehavior>
          <a className={styles.navLink}>Inicio</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={styles.navLink}>Acerca de</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={styles.navLink}>Contacto</a>
        </Link>
      </div>
    </nav>
  );
}
