import React from "react";
import Card from "../Components/Card";
import { useContextGlobalStates } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextGlobalStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => {
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
