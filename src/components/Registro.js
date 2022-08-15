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
      console.log(JSON.stringify(datos))

      alert("En breve recibiras un correo confirmando el registro")
   }


   return (

      <div className="registro-form">
         <div className="formulario">
            <h3>Formulario de registro</h3>

            <p>
               <label className="colocar_nombre">email
                  <span className="obligatorio">*</span>
               </label>
               <input value={email}
                  onChange={(e) => (setEmail((e.target.value)))} type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu email" />
            </p>

            <p>
               <label className="colocar_email">Usuario
                  <span className="obligatorio">*</span>
               </label>
               <input value={usuario}
                  onChange={(e) => (setUsuario((e.target.value)))} type="text" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu usuario" />
            </p>
            <p>
               <label className="colocar_email">Contraseña
                  <span className="obligatorio">*</span>
               </label>
               <input value={password}
                  onChange={(e) => (setPassword((e.target.value)))} type="password" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu contraseña" />
            </p>

            <p>
               <label className="colocar_telefono">Nombre
               </label>
               <input value={nombre}
                  onChange={(e) => (setNombre((e.target.value)))} type="text" name="introducir_telefono" id="telefono" placeholder="Escribe tu nombre" />
            </p>

            <p>
               <label className="colocar_asunto">Apellidos
                  <span className="obligatorio">*</span>
               </label>
               <input value={apellidos}
                  onChange={(e) => (setApellidos((e.target.value)))} type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe tus apellidos" />
            </p>

            <p>
               <label className="colocar_asunto">Ciudad
                  <span className="obligatorio">*</span>
               </label>
               <input value={ciudad}
                  onChange={(e) => (setCiudad((e.target.value)))} type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe tu ciudad" />
            </p>
            <p>
               <label className="colocar_asunto">Calle
                  <span className="obligatorio">*</span>
               </label>
               <input value={calle}
                  onChange={(e) => (setCalle((e.target.value)))} type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe tu calle" />
            </p>

            <p>
               <label className="colocar_mensaje">Telefono
                  <span className="obligatorio">*</span>
               </label>
               <input value={telefono}
                  onChange={(e) => (setTelefono((e.target.value)))} type="number" name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Escribe tu telefono"></input>
            </p>

            <button onClick={() => enviarDatosRegistro()} type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

            <p className="aviso">
               <span className="obligatorio"> * </span>los campos son obligatorios.
            </p>


         </div>
      </div>


   )
}