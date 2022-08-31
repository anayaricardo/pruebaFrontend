import React from "react";
import style from "../CSS/Footer.module.css";
import danone from "../img/img-logo-danone.png"
import vitalinea from "../img/img-logo-footer.png"


export default function Familia() {
    return <div className={style.background}>
      <div className={style.logos}>
      <img src={danone} alt="logo danone" className={style.danone} />
      <img src={vitalinea} alt="logo vitalínea" className={style.vitalinea} />
      </div>
      <p className={style.texto1}>Términos y condiciones| Políticas de privacidad | Aviso de privacidad</p>
      <p className={style.texto2}>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
    </div>;
  }