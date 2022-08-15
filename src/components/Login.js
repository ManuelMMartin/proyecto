import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Login({ user, pass, setUser, setPass, setLogin, setInputUser }) {
   let [usuarios, setUsuarios] = useState([])
   let [error, setError] = useState("")

   useEffect(() => {
      fetch('https://fakestoreapi.com/users')
         .then(res => res.json())
         .then(usuarios => setUsuarios(usuarios))

   }, [])

   useEffect(() => {
      fetch('https://fakestoreapi.com/auth/login', {
         method: 'POST',
         body: JSON.stringify({
            username: "aasd",
            password: "ewedon"
         })
      })
         .then(res => res.json())
         .then(datos => { console.log(datos) })
   }, [])



   function loginUser() {
      for (let i = 0; i < usuarios.length; i++) {
         if (user === usuarios[i].username && pass === usuarios[i].password) {
            return (
               setInputUser(usuarios[i]),
               setLogin(true),
               setUser(""),
               setPass(""),
               setError(""))

         } else {
            setLogin(false)
            setError("Usuario o contraseña incorrectos")
            setUser("")
            setPass("")

         }
      }
   }


   return (
      <>
         <form>
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
            </div>
         </form>
         <p>{error}</p>
         <div className="button-container">
            <button onClick={() => (loginUser())}>Enviar</button>
            <Link to="/login/registro"><button >Registrarse</button></Link>
         </div>


      </>
   )
}

export default Login

/* donero ewedon */