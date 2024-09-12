import React from "react";
import Card from "../Components/Card";

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentist) => {
          return (
            <Card
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              key={dentist.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favs;
