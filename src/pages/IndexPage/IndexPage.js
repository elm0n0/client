import React from "react";
import { Link } from 'react-router-dom';
import "./IndexPage.css";
const IndexPage = () => {

    const onSubmitForm = (e) => {
        e.preventDefault();
    }

  return (
    <>
      <div className="contenedor">
        <div className="FORMULARIO">
          <form onSubmit={onSubmitForm}>
            <input type="text" name="name" placeholder="Nombre"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="submit" name="Submit" value="Entrar" />
            <input type="button" value="Registrarse" />
            <br/>
            <Link className="LinkTobutton" to={'/'}>Entrar sin registro</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
