import React from "react";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" />
      </div>
      <div>
        <a href="#">
          <img src="/imagenes/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/imagenes/ico-instagram.png" alt="Instagram" />
        </a>
        <a href="#">
          <img src="/imagenes/ico-whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="#">
          <img src="/imagenes/ico-tiktok.png" alt="TikTok" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
