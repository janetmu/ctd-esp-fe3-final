import React from "react";
import styles from "../Styles/Footer.module.css";
import { useContextGlobalStates } from "./utils/global.context";

const Footer = () => {
  const { state } = useContextGlobalStates();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.redBar}>
        <p>VOLVER ARRIBA</p>
      </div>
      <div className={`${styles.footerContent} ${state.theme}`}>
        <img src="/images/DH.png" alt="DH-logo" className={styles.logo} />

        <div className={styles.socialIcons}>
          <a href="#">
            <img
              src="/images/ico-facebook.png"
              alt="Facebook"
              className={`${styles.icon} ${state.theme == "dark" ? styles.dark : ''}`}
            />
          </a>
          <a href="#">
            <img
              src="/images/ico-instagram.png"
              alt="Instagram"
              className={`${styles.icon} ${state.theme == "dark" ? styles.dark : ''}`}
            />
          </a>
          <a href="#">
            <img
              src="/images/ico-whatsapp.png"
              alt="WhatsApp"
              className={`${styles.icon} ${state.theme == "dark" ? styles.dark : ''}`}
            />
          </a>
          <a href="#">
            <img
              src="/images/ico-tiktok.png"
              alt="TikTok"
              className={`${styles.icon} ${state.theme == "dark" ? styles.dark : ''}`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
