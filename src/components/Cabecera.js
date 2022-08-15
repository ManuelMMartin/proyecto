import { Link } from "react-router-dom"
/* import { useState, useEffect } from "react" */
import logo from "../image/logo.png"
import cart from "../image/cart-image.png"


function Cabecera({ login, setLogin, suma, inputUser }) {

   if (login) {
      return (

         <header className="header">
            <div className="header__container container">
               <Link to="/"><img className="header__logo" src={logo} alt="logo" /></Link>
               <nav className="header__menu">
                  <ul className="header__menu-list">
                     <li className="header__menu-item"><Link to="/categorias"><h3 className="header__menu-link">CATEGORIAS</h3></Link></li>
                     <li className="header__menu-item"><Link to="/buscador"><h3 className="header__menu-link">BUSCADOR</h3></Link></li>
                     <li className="header__menu-item"><Link to="/sobre_nosotros"><h3 className="header__menu-link">SOBRE NOSOTROS</h3></Link></li>
                     <li className="header__menu-item"><h3>Bienvenido {inputUser.username}</h3></li>
                     <li className="header__menu-item">
                        <Link to="/carrito">
                           <button className="button button--xs" onClick={() => ("")}>
                              <img className="cartImage" src={cart} alt="cartImage" />
                              <p>{suma}</p>
                           </button>
                        </Link>
                     </li>
                     <li className="header__menu-item">
                        <button className="button button--xs" onClick={() => (setLogin(false))}>Salir</button>
                     </li>
                  </ul>
               </nav >
            </div >
         </header >

      )

   } else {
      return (
         <header className="header">
            <div className="header__container container">
               <Link to="/"><img className="header__logo" src={logo} alt="logo" /></Link>
               <nav className="header__menu">
                  <ul className="header__menu-list">
                     <li className="header__menu-item"><Link to="/categorias"><h3 className="header__menu-link">CATEGORIAS</h3></Link></li>
                     <li className="header__menu-item"><Link to="/buscador"><h3 className="header__menu-link">BUSCADOR</h3></Link></li>
                     <li className="header__menu-item"><Link to="/sobre_nosotros"><h3 className="header__menu-link">SOBRE NOSOTROS</h3></Link></li>
                     <li className="header__menu-item">
                        <Link to="/carrito">
                           <button className="button button--xs" onClick={() => ("")}>
                              <img className="cartImage" src={cart} alt="cartImage" />
                              <p>{suma}</p>
                           </button>
                        </Link>
                     </li>
                     <li className="header__menu-item">
                        <Link to="/login">
                           <button className="button button--xs">Login</button>
                        </Link>
                     </li>
                  </ul>
               </nav >
            </div >
         </header >

      )
   }
}
export default Cabecera