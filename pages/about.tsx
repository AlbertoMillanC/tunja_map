import Head from 'next/head';
import styles from '../styles/About.module.css';
import Navbar from '../components/Navbar';
import texts from '../content/texts';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acerca de - Mapa de Obras</title>
        <meta name="description" content="Información sobre el proyecto Mapa de Obras de Tunja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Acerca del Proyecto</h1>
        
        <section className={styles.section}>
          <h2>Nuestra Misión</h2>
          <p>
            El Mapa de Obras de Tunja es una iniciativa que busca mejorar la transparencia 
            y el acceso a la información sobre las obras públicas en la ciudad. Nuestro 
            objetivo es facilitar el seguimiento de los proyectos y promover la 
            participación ciudadana en el desarrollo urbano.
          </p>
        </section>

        <section className={styles.section}>
          <h2>¿Qué Ofrecemos?</h2>
          <ul>
            <li>Visualización interactiva de obras en el mapa de Tunja</li>
            <li>Información detallada sobre cada proyecto</li>
            <li>Actualizaciones en tiempo real del estado de las obras</li>
            <li>Fotos y documentación de los avances</li>
            <li>Canales de comunicación con la administración</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Nuestro Equipo</h2>
          <p>
            Este proyecto es desarrollado por un equipo multidisciplinario que incluye 
            desarrolladores, diseñadores y expertos en gestión de proyectos. Trabajamos 
            en colaboración con la Alcaldía de Tunja para asegurar la precisión y 
            actualización de la información.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contacto</h2>
          <p>
            Si tienes preguntas o sugerencias sobre el proyecto, no dudes en 
            contactarnos a través de nuestra página de contacto.
          </p>
        </section>
      </main>
    </div>
  );
} 