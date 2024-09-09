import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Brightness4, NightlightRound } from "@mui/icons-material"; // Importamos los iconos

import styles from "../Styles/Navbar.module.css";
import { useContextGlobalStates } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContextGlobalStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav
      className={`${styles.navbar} ${
        state.theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <Link to="/" className={styles.logoContainer}>
        <h1 className={styles.title}>
          <span className={styles.red}>D</span>H Odonto
        </h1>
      </Link>
      <div className={styles.rightSection}>
        <div className={styles.navLinks}>
          <Link to="/">Inicio</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/favs">Detalle Dentista</Link>
          <Link to="/favs">Destacados</Link>
        </div>

        {/* Botón para cambiar el tema */}
        <button className={styles.themeButton} onClick={toggleTheme}>
          {state.theme === "dark" ? (
            <Brightness4 />
          ) : (
            <NightlightRound className={styles.flippedIcon} />
          )}{" "}
          {/* Icono según el tema */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
