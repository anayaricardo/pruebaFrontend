import React from "react";
import style from "../CSS/Nav.module.css";
import logo from "../img/img-logo-vitalinea.png";
import menu from "../img/menuIco.png";
import face from "../img/img-social-facebook@3x.png";
import ig from "../img/img-social-instagram@3x.png";
import yt from "../img/img-social-youtube@3x.png";

export default function Nav() {
  return (
    <div className={style.background}>
      <img src={logo} alt="logo-vitalinea" className={style.imgLogoVitalinea} />
      <img src={menu} alt="menu" className={style.menuIco} />
      <div className={style.titulos}>
      <h1 className={style.titulo}>Nuestros productos</h1>
      <h1 className={style.titulo}>Disfruta cuidarte</h1>
      <h1 className={style.titulo}>Blog</h1>
      </div>
      <div className={style.icos}>
      <img src={face} alt="facebook" className={style.ico} />
      <img src={ig} alt="instagram" className={style.ico} />
      <img src={yt} alt="youtube" className={style.ico} />
      </div>
    </div>
  );
}
