import React from "react";
import style from "../CSS/Familia.module.css";
import griego from "../img/img-vitalinea-griego.png"
import sinAzucar from "../img/img-vitalinea-sin-azucar.png"
import bebible from "../img/img-vitalinea-bebible.png"


export default function Familia() {
  return <div className={style.background}>
    <h1 className={style.familia}>LA FAMILIA VITALÍNEA</h1>
    <div className={style.productos}>
    <div>
    <img src={griego} alt="vitalínea Griego" className={style.producto1} />
    <h1 className={style.textoProducto}>Vitalínea Griego</h1>
    </div>
    <div>
    <img src={sinAzucar} alt="vitalínea sin azúcar" className={style.producto2} />
    <h1 className={style.textoProducto}>Vitalínea sin Azúcar</h1>
    </div>
    <div>
    <img src={bebible} alt="vitalínea bebible" className={style.producto3} />
    <h1 className={style.textoProducto}>Vitalínea Bebible</h1>
    </div>
    </div>
  </div>;
}
