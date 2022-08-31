import React from "react";
import style from "../CSS/Nav.module.css";
import logo from "../img/img-logo-vitalinea.png";
import menu from "../img/menuIco.png";

export default function Nav() {
  return (
    <div className={style.background}>
      <img src={logo} alt="logo-vitalinea" className={style.imgLogoVitalinea} />
      <img src={menu} alt="menu" className={style.menuIco} />
    </div>
  );
}
