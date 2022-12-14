import { useState } from "react"

export function SobreNosotros() {
  let [nombre, setNombre] = useState("")
  let [email, setEmail] = useState("")
  let [telefono, setTelefono] = useState("")
  let [asunto, setAsunto] = useState("")
  let [mensaje, setMensaje] = useState("")
  let [enviarDatos, setEnviarDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  })

  function datos() {
    

    if (nombre !== "" && email !== "" && telefono !== "" && asunto !== "" && mensaje) {
      setEnviarDatos(({ nombre: nombre, email: email, telefono: telefono, asunto: asunto, mensaje: mensaje }))
      alert("Mensaje enviado")
      console.log(JSON.stringify(enviarDatos))
      setNombre("")
      setEmail("")
      setTelefono("")
      setAsunto("")
      setMensaje("")
    } else {
      alert("Debes rellenar todos los campos obligatorios")
    }

  }

  return (<>
    <div className="container">
      <h1>Nuestra historia</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore
        nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi delectus tempora
        ab, assumenda velit reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus minima ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis
        consequuntur modi delectus tempora ab, assumenda velit reprehenderit culpa!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore nobis, accusamus
        quos fuga unde distinctio nulla quis consequuntur modi delectus tempora ab, assumenda velit
        reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
        ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi
        delectus tempora ab, assumenda velit reprehenderit culpa!
      </p>
    </div>
    <div className="container producto">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore
        nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi delectus tempora
        ab, assumenda velit reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus minima ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis
        consequuntur modi delectus tempora ab, assumenda velit reprehenderit culpa!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore nobis, accusamus
        quos fuga unde distinctio nulla quis consequuntur modi delectus tempora ab, assumenda velit
        reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
        ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi
        delectus tempora ab, assumenda velit reprehenderit culpa!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore
        nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi delectus tempora
        ab, assumenda velit reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus minima ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis
        consequuntur modi delectus tempora ab, assumenda velit reprehenderit culpa!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore nobis, accusamus
        quos fuga unde distinctio nulla quis consequuntur modi delectus tempora ab, assumenda velit
        reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
        ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi
        delectus tempora ab, assumenda velit reprehenderit culpa!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore
        nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi delectus tempora
        ab, assumenda velit reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus minima ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis
        consequuntur modi delectus tempora ab, assumenda velit reprehenderit culpa!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus minima ut cumque labore nobis, accusamus
        quos fuga unde distinctio nulla quis consequuntur modi delectus tempora ab, assumenda velit
        reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
        ut cumque labore nobis, accusamus quos fuga unde distinctio nulla quis consequuntur modi
        delectus tempora ab, assumenda velit reprehenderit culpa!
      </p>


      <div className="contact_form">
        <div className="formulario">
          <h2>Formulario de contacto</h2>
          <h3>Escr??benos y en breve los pondremos en contacto contigo</h3>

          <p>
            <label className="colocar_nombre">Nombre
              <span className="obligatorio">*</span>
            </label>
            <input
              value={nombre}
              onChange={(e) => (setNombre((e.target.value)))} type="text" id="nombre" placeholder="Escribe tu nombre" required />
          </p>

          <p>
            <label className="colocar_email">Email
              <span className="obligatorio">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => (setEmail((e.target.value)))} type="email" id="email" placeholder="Escribe tu Email" required />
          </p>

          <p>
            <label className="colocar_telefono">Tel??fono
            </label>
            <input
              value={telefono}
              onChange={(e) => (setTelefono((e.target.value)))} type="phone" id="telefono" placeholder="Escribe tu tel??fono" required />
          </p>

          <p>
            <label className="colocar_asunto">Asunto
              <span className="obligatorio">*</span>
            </label>
            <input
              value={asunto}
              onChange={(e) => (setAsunto((e.target.value)))} type="text" id="assunto" placeholder="Escribe un asunto" required />
          </p>

          <p>
            <label className="colocar_mensaje">Mensaje
              <span className="obligatorio">*</span>
            </label>
            <textarea
              value={mensaje}
              onChange={(e) => (setMensaje((e.target.value)))} name="introducir_mensaje" id="mensaje" placeholder="Deja aqu?? tu comentario..." required></textarea>
          </p>

          <button onClick={() => datos()}><p>Enviar</p></button>

          <p className="aviso">
            <span className="obligatorio"> * </span>los campos son obligatorios.
          </p>


        </div>
      </div>
    </div>
  </>

  )
}