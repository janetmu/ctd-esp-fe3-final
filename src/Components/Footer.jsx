import React from "react";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.redBar}>
        <p>VOLVER ARRIBA</p>
      </div>
      <div className={styles.footerContent}>
        <img src="/images/DH.png" alt="DH-logo" className={styles.logo} />

        <div className={styles.socialIcons}>
          <a href="#">
            <img
              src="/images/ico-facebook.png"
              alt="Facebook"
              className={styles.icon}
            />
          </a>
          <a href="#">
            <img
              src="/images/ico-instagram.png"
              alt="Instagram"
              className={styles.icon}
            />
          </a>
          <a href="#">
            <img
              src="/images/ico-whatsapp.png"
              alt="WhatsApp"
              className={styles.icon}
            />
          </a>
          <a href="#">
            <img
              src="/images/ico-tiktok.png"
              alt="TikTok"
              className={styles.icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
