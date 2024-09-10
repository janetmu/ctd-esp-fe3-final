import React from "react";
import CardStyles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
import Star from "@mui/icons-material/StarPurple500Sharp";

localStorage.setItem("favs", JSON.stringify([]));

const Card = ({ name, username, id }) => {

  const addFav = () => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    favs.push({id, name, username});
    localStorage.setItem("favs", JSON.stringify(favs));
  }

  return (
    <div className={CardStyles.cardsContainer}>
      <div className={CardStyles.card}>
        <Link key={id} to={`detail/${id}`}>
          <img src="/images/doctor.jpg" alt="Dentist profile picture" />
          <h2>{name}</h2>
          <p>{username}</p>
        </Link>
        <button onClick={addFav} className={CardStyles.favButton}>
          <Star className={CardStyles.starIcon} />
        </button>
      </div>
    </div>
  );
};

export default Card;
