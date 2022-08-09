import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Login({ user, pass, setUser, setPass, setLogin }) {
   let [users, setUsers] = useState({})

   function loginUser() {
      for (let i = 0; i < users.length; i++) {
         if (user === users[i].username && pass === users[i].password) {
            alert("correcto")
            setLogin(true)
            setUser("")
            setPass("")
            break
         } else {
            setLogin(false)
            setUser("")
            setPass("")
         }
      }
   }

   useEffect(() => {
      fetch('https://fakestoreapi.com/users')
         .then(res => res.json())
         .then(usuarios => setUsers(usuarios))

   }, [])

   return (
      <div className="form">
         <div className="input-container">
            <label>Usuario </label>
            <input
               value={user}
               onChange={(e) => (setUser((e.target.value)))}
               type="text"
               required />
         </div>
         <div className="input-container">
            <label>Contraseña </label>
            <input
               value={pass}
               onChange={(e) => (setPass((e.target.value)))}
               type="password"
               required />
         </div>
         <div className="button-container">
         <Link to="/"><button onClick={loginUser}>Enviar</button></Link>
            <button >Registrarse</button>
         </div>
      </div>
   )
}

export default Login

/* donero ewedon */