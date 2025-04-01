import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Enviando mensaje...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto - Mapa de Obras</title>
        <meta name="description" content="Contáctanos para cualquier consulta sobre las obras en Tunja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>Contacto</h1>
            <div className={styles.subtitle}>
              <span className={styles.icon}>📬</span>
              <h2>¿Cómo podemos ayudarte?</h2>
            </div>
            <p>Por favor escribe aquí sus inquietudes o sugerencias.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Tu número de teléfono"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí"
                rows={5}
                required
              />
            </div>

            {status.message && (
              <div className={`${styles.alert} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className={styles.submitButton}>
              Enviar mensaje
            </button>
          </form>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h3>Dirección</h3>
                <p>Calle 19 No. 9-95, Tunja, Boyacá</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h3>Teléfono</h3>
                <p>+57 (608) 7405770</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h3>Correo</h3>
                <p>contacto@tunja.gov.co</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 