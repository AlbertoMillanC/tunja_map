import React from 'react';
import Head from 'next/head';
import styles from '../styles/PlanDesarrollo.module.css';
import Navbar from '../components/Navbar';

const PlanDesarrollo = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plan de Desarrollo - Mapa de Obras</title>
        <meta name="description" content="Plan de desarrollo para el mapa de obras" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Plan de Desarrollo</h1>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Objetivos</h2>
            <ul>
              <li>Mejorar la transparencia en la gestión de obras públicas</li>
              <li>Facilitar el acceso a información sobre obras en desarrollo</li>
              <li>Permitir el seguimiento ciudadano de proyectos</li>
              <li>Optimizar la comunicación entre ciudadanos y autoridades</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Fases del Proyecto</h2>
            <div className={styles.phase}>
              <h3>Fase 1: Implementación Inicial</h3>
              <ul>
                <li>Desarrollo del mapa base</li>
                <li>Implementación de marcadores</li>
                <li>Creación de popups informativos</li>
              </ul>
            </div>
            <div className={styles.phase}>
              <h3>Fase 2: Mejoras y Optimización</h3>
              <ul>
                <li>Optimización de rendimiento</li>
                <li>Mejora de la interfaz de usuario</li>
                <li>Implementación de filtros</li>
              </ul>
            </div>
            <div className={styles.phase}>
              <h3>Fase 3: Características Avanzadas</h3>
              <ul>
                <li>Integración con redes sociales</li>
                <li>Sistema de notificaciones</li>
                <li>Reportes y estadísticas</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Próximos Pasos</h2>
            <ul>
              <li>Implementación de sistema de autenticación</li>
              <li>Desarrollo de panel de administración</li>
              <li>Integración con más fuentes de datos</li>
              <li>Mejora de la experiencia móvil</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PlanDesarrollo; 