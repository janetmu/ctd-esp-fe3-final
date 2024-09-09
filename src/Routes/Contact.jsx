import React from "react";
import Form from "../Components/Form";
import { useContextGlobalStates } from "../Components/utils/global.context";


const Contact = () => {
  const { state } = useContextGlobalStates();

  return (
    <div className={state.theme}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>
      <Form />
    </div>
  );
};

export default Contact;