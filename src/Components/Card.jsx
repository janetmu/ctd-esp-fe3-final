import React from "react";
import CardStyles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";

localStorage.setItem("favs", JSON.stringify([]));

const Card = ({ name, username, id }) => {

  const addFav = () => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    favs.push({id, name, username});
    localStorage.setItem("favs", JSON.stringify(favs));
  }

  return (
    <div className={CardStyles.card}>
      <Link key={id} to={`detail/${id}`}>
        <img src="/images/doctor.jpg" alt="Dentist profile picture" />
        <h2>{name}</h2>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className={CardStyles.favButton}>Add fav</button>
    </div>
  );
};

export default Card;
