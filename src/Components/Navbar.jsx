import React from "react";
import { Link } from "react-router-dom";
import { Brightness7, NightlightSharp } from "@mui/icons-material"; // Importamos los iconos
import { routes } from "../Components/utils/routes";
import styles from "../Styles/Navbar.module.css";
import { useContextGlobalStates } from "./utils/global.context";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const { state, dispatch } = useContextGlobalStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME", payload: state.theme === "dark" ? "" : "dark"  });
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
          <Link to={routes.home}>Inicio</Link>
          <Link to={routes.contact}>Contacto</Link>
          <Link to={routes.favs}>Destacados</Link>
        </div>

        {/* Botón para cambiar el tema */}
        <IconButton className={styles.themeButton} onClick={toggleTheme}>
          {state.theme === "dark" ? (
            <Brightness7 />
          ) : (
            <NightlightSharp className={styles.nightIcon} />
          )}{" "}
          {/* Icono según el tema */}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
