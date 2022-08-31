import Nav from "./Components/Nav.jsx";
import Contenido from "./Components/Contenido.jsx";
import Familia from "./Components/Familia.jsx";
import Footer from "./Components/Footer.jsx";
import style from "./App.module.css";
import bote from "./img/img-bote-fresa.png";
import avalado from "./img/img-sello-avalado.png";
import menos100 from "./img/img-100-kcal.png";
import flecha from "./img/flecha.png";

function App() {
  return (
    <div>
      <div className={style.background}>
        <Nav />
        <img src={bote} alt="bote fresa" className={style.bote} />
        <div className={style.sabores}>
          <span className={style.picker01}>Sabor:</span>
          <div className={style.picker02}>
            <span className={style.picker03}>Fresa</span>
          </div>
          <div className={style.picker04}>
            <span className={style.picker05}>Guayaba</span>
          </div>
          <div className={style.picker06}>
            <span className={style.picker07}>Toronja</span>
          </div>
        </div>
        <h1 className={style.titulo}>Vitalínea® Bebible Fresa 217 gr.</h1>
        <p className={style.presentación}>
          ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
          opción si eres de las personas que siempre están activas y quieren
          probar algo sano, rico y práctico.
        </p>
        <button className={style.button}>Comprar en Walmart</button>
        <div className={style.sellos}>
          <img src={avalado} alt="avalado" className={style.avalado} />
          <img
            src={menos100}
            alt="menos de 100 kcal"
            className={style.menos100}
          />
        </div>
        <div className={style.elementoFlecha}>
          <img src={flecha} alt="flecha" className={style.flecha} />
        </div>
      </div>
      <body>
        <h1 className={style.titulo2}>Información nutrimental</h1>
        <p className={style.informacion}>
          Vitalínea® Bebible Guayaba 217gr
          <br /> Valor promedio por porción de 217gr
          <br />
          Porciones por envase: 1
        </p>
        <span className={style.textStyle2}>Ingredientes: </span>
        <br />
        <p className={style.textStyle1}>
          Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca.
          3.5% preparado de fruta guayaba (acesulfame K y sucralosa
          (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
          lácticos.
        </p>
        <Contenido />
        <Familia />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
