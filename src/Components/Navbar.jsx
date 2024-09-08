/*import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useContextGlobalStates} from "./utils.global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/favs" className={styles.link}>
            Favs
          </Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className={styles.themeButton}>Change theme</button>
    </nav>
  );
}

export default Navbar;*/