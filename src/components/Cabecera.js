import { Link } from "react-router-dom"
/* import { useState, useEffect } from "react" */
import image from "../image/logo.png"


function Cabecera({ login, setLogin, suma /* carrito */ }) {
   /* let [suma, setSuma] = useState(0) */

   /* useEffect(() => {
      let arraySuma = []
      carrito.forEach((producto) => {
         arraySuma.push(producto.cantidad)
         let totalSuma = arraySuma.map((item) => item).reduce((a, b) => a + b, 0)
         setSuma(totalSuma)
      });
   }, [carrito]) */


   if (login) {
      return (
         <header className="header__container container">
            <Link to="/"><img className="logo" src={image} alt="logo" /></Link>
            <Link to="/categorias"><h3>CATEGORIAS</h3></Link>
            <Link to="/buscador"><h3>BUSCADOR</h3></Link>
            <Link to="/sobre_nosotros"><h3>SOBRE NOSOTROS</h3></Link>
            <img className="userImage" src="https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png" alt="userImage" />
            <p>Bienvenido</p>
            <Link to="/carrito">
               <button>
                  <img className="cartImage" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cartImage" />
                  <p>{suma}</p>
               </button>
            </Link>
            <button onClick={() => (setLogin(false))}>Salir</button>
         </header>
      )

   } else {
      return (
         <header className="header__container container">
            <Link to="/"><img className="logo" src={image} alt="logo" /></Link>
            <Link to="/categorias"><h3>CATEGORIAS</h3></Link>
            <Link to="/buscador"><h3>BUSCADOR</h3></Link>
            <Link to="/sobre-nosotros"><h3>SOBRE NOSOTROS</h3></Link>
            <div>
               <Link to="/carrito">
                  <button onClick={() => ("")}>
                     <img className="cartImage" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cartImage" />
                     <p>{suma}</p>
                  </button>
               </Link>
               <Link to="/login">
                  <button>Login</button>
               </Link>
            </div>
         </header>
      )
   }
}

export default Cabecera