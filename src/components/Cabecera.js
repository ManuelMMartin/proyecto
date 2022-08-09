import { Link } from "react-router-dom"
import { useState } from "react"
import image from "../image/logo.png"

function Cabecera({ login, setLogin, num }) {

   if (login) {
      return (
         <header className="container">
            <Link to="/"><img className="logo" src={image} alt="logo" /></Link>
            <Link to="/categorias"><h3>CATEGORIAS</h3></Link>
            <Link to="/buscador"><h3>BUSCADOR</h3></Link>
            <Link to="/sobre_nosotros"><h3>SOBRE NOSOTROS</h3></Link>

            <div className="">
               <img className="userImage" src="https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png" alt="userImage" />
               <p>Bienvenido</p>
               <Link to="/carrito">
                  <button onClick={() => ("")}>
                     <img className="cartImage" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
                     <p>{num}</p>
                  </button>
               </Link>
               <button onClick={() => (setLogin(false))}>Salir</button>
            </div>


         </header>
      )

   } else {
      return (
         <header className="container">
            <Link to="/"><img className="logo" src={image} alt="logo" /></Link>
            <Link to="/categorias"><h3>CATEGORIAS</h3></Link>
            <Link to="/buscador"><h3>BUSCADOR</h3></Link>
            <Link to="/sobre-nosotros"><h3>SOBRE NOSOTROS</h3></Link>

            <div>
               <Link to="/carrito">
                  <button onClick={() => ("")}>
                     <img className="cartImage"
                        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
                     <p>{num}</p>
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