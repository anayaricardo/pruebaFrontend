import React from "react";
import style from "../CSS/Contenido.module.css";

export default function Contenido() {
  return (
    <div className={style.background}>
      <span className={style.contenidoEnergetico}>
        Contenido energético kJ/kcal
        <br />
        Proteínas (g)
        <br />
        Grasas (lípidos) (g)
        <br />
        Grasas saturadas (g)
        <br />
        Carbohidratos (Hidratos de carbono) (g)
        <br /> Azúcares (g)
        <br />
        Azúcares añadidos (g)
        <br />
        Fibra dietética (g)
        <br />
        Sodio (mg)
        <br />
        Calcio (mg)
        <br />
        %VNR*
      </span>
      <span className={style.numeros}>
        413,2/97,9
        <br />
        5.3
        <br />
        2.1
        <br />
        1.4
        <br />
        12.4
        <br />
        7.7
        <br />
        0.1
        <br />
        0.0
        <br />
        92.7
        <br />
        199.6 
        <br />
        22
      </span>
    </div>
  );
}
