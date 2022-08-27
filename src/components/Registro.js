import { useState } from "react"

export function Registro() {

   let [email, setEmail] = useState("")
   let [usuario, setUsuario] = useState("")
   let [password, setPassword] = useState("")
   let [nombre, setNombre] = useState("")
   let [apellidos, setApellidos] = useState("")
   let [ciudad, setCiudad] = useState("")
   let [calle, setCalle] = useState("")
   let [telefono, setTelefono] = useState("")
   let [datos, setDatos] = useState([
      {
         email: "",
         username: "",
         password: "",
         name: {
            firstname: "",
            lastname: ""
         },
         address: {
            city: "",
            street: ""
         },
         phone: ""
      }
   ])

   /* 
   fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(datos)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    */


   function enviarDatosRegistro() {
      setDatos([
         {
            email: email,
            username: usuario,
            password: password,
            name: {
               firstname: nombre,
               lastname: apellidos
            },
            address: {
               city: ciudad,
               street: calle
            },
            phone: telefono
         }])

      if (email !== "" && usuario !== "" && password !== "" && nombre !== "" && apellidos !== "" && ciudad !== "" && calle !== "" && telefono !== "") {
         alert("En breve recibiras un correo confirmando el registro")
         console.log(JSON.stringify(datos))
         
      } else {
         alert("Debes rellenar todos los campos obligatorios")
      }
   }

   return (
      <div className="container">
         <div className="contact_form">
            <div className="formulario">
               <h3>Formulario de registro</h3>

               <p>
                  <label className="colocar_email">email
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={email}
                     onChange={(e) => (setEmail((e.target.value)))} type="email" id="email" placeholder="Escribe tu email" required />
               </p>

               <p>
                  <label className="colocar_usuario">Usuario
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={usuario}
                     onChange={(e) => (setUsuario((e.target.value)))} type="text" placeholder="Escribe tu usuario" required />
               </p>
               <p>
                  <label className="colocar_contraseña">Contraseña
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={password}
                     onChange={(e) => (setPassword((e.target.value)))} type="password" placeholder="Escribe tu contraseña" required />
               </p>

               <p>
                  <label className="colocar_nombre">Nombre
                  </label>
                  <input value={nombre}
                     onChange={(e) => (setNombre((e.target.value)))} type="text" placeholder="Escribe tu nombre" required />
               </p>

               <p>
                  <label className="colocar_apellidos">Apellidos
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={apellidos}
                     onChange={(e) => (setApellidos((e.target.value)))} type="text" placeholder="Escribe tus apellidos" required />
               </p>

               <p>
                  <label className="colocar_ciudad">Ciudad
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={ciudad}
                     onChange={(e) => (setCiudad((e.target.value)))} type="text" placeholder="Escribe tu ciudad" required />
               </p>
               <p>
                  <label className="colocar_calle">Calle
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={calle}
                     onChange={(e) => (setCalle((e.target.value)))} type="text" placeholder="Escribe tu calle" required />
               </p>

               <p>
                  <label className="colocar_Telefono">Telefono
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={telefono}
                     onChange={(e) => (setTelefono((e.target.value)))} type="phone" id="mensaje" placeholder="Escribe tu telefono" required />
               </p>

               <button onClick={() => enviarDatosRegistro()} type="submit"><p>Enviar</p></button>

               <p className="aviso">
                  <span className="obligatorio"> * </span>los campos son obligatorios.
               </p>


            </div>
         </div>
      </div>

   )
}