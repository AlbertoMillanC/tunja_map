import { useEffect, useRef } from 'react';
import styles from "../styles/Home.module.css";

interface InstagramEmbedProps {
  postUrl: string;
}

export default function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  const embedContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.instgrm && window.instgrm.Embeds && embedContainer.current) {
        window.instgrm.Embeds.process();
      }
    }
  }, [postUrl]);

  return (
    <div className={styles.obrasList} role="region" aria-label="Instagram Post Embed">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", minHeight: "300px" }}>
        <div ref={embedContainer}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
          >
            <a href={postUrl} target="_blank" rel="noopener noreferrer">
              Ver post en Instagram
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
