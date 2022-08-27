import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Login({ user, pass, setUser, setPass, setLogin, setInputUser, login, inputUser, compras }) {
   let [usuarios, setUsuarios] = useState([])
   let [error, setError] = useState("")

   useEffect(() => {
      fetch('https://fakestoreapi.com/users')
         .then(res => res.json())
         .then(usuarios => setUsuarios(usuarios))

   }, [])

   function loginUser() {
      for (let i = 0; i < usuarios.length; i++) {
         if (user === usuarios[i].username && pass === usuarios[i].password) {
            return (
               setInputUser(usuarios[i]),
               setLogin(true),
               setUser(""),
               setPass(""),
               setError("")
               )

         } else {
            setLogin(false)
            setError("Usuario o contraseña incorrectos")
            setUser("")
            setPass("")

         }
      }
   }

   if (login) {
      return (
         <div className="contact_form">
            <div className="container">
               <div className="formulario">
                  <h3>Perfil de usuario</h3>
                  <h2>Usuario: {inputUser.username} </h2>
                  <h2>Email: {inputUser.email}</h2>
                  <h2>Nombre: {inputUser.name.firstname} {inputUser.name.lastname} </h2>
                  <h2>Telefono: {inputUser.phone} </h2>
                  <h2>Ciudad: {inputUser.address.city} </h2>
                  <h2>NºCompras: {compras} </h2>
               </div>
            </div>
            <div className="container">
               <div className="button-container">
                  <button className="button__mod" onClick={()=>(alert("Aun no esta disponible esta opcion"))}>Modificar</button>
               </div>
            </div>


         </div>
      )

   } else {
      return (
         <>
            <form className="container">
               <div className="formulario">
                  <div className="form">
                     <p>(prueba con "donero" y "ewedon")</p>
                     <div className="input-container">
                        <label>Usuario </label>
                        <input
                           value={user}
                           onChange={(e) => (setUser((e.target.value)))}
                           type="text"
                        />
                     </div>
                     <div className="input-container">
                        <label>Contraseña </label>
                        <input
                           value={pass}
                           onChange={(e) => (setPass((e.target.value)))}
                           type="password"
                        />
                     </div>
                     <p>{error}</p>
                  </div>
               </div>
            </form>
            <div className="container">

               <div className="button-container">
                  <button onClick={() => (loginUser())}>Enviar</button>
                  <Link to="/login/registro"><button>Registrarse</button></Link>
               </div>
            </div>


         </>
      )
   }
}

export default Login