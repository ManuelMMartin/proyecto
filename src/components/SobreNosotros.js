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
    setEnviarDatos(({ nombre: nombre, email: email, telefono: telefono, asunto: asunto, mensaje: mensaje }))
    console.log(JSON.stringify(enviarDatos))
    setAsunto("")
    setEmail("")
    setMensaje("")
    setNombre("")
    setTelefono("")
    alert("Mensaje enviado")
  }

  return (<>

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
    </p>

    <div className="contact_form">

      <div className="formulario">
        <h2>Formulario de contacto</h2>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>


        


          <p>
            <label className="colocar_nombre">Nombre
              <span className="obligatorio">*</span>
            </label>
            <input value={nombre}
              onChange={(e) => (setNombre((e.target.value)))} type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" />
          </p>

          <p>
            <label className="colocar_email">Email
              <span className="obligatorio">*</span>
            </label>
            <input value={email}
              onChange={(e) => (setEmail((e.target.value)))} type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
          </p>

          <p>
            <label className="colocar_telefono">Teléfono
            </label>
            <input value={telefono}
              onChange={(e) => (setTelefono((e.target.value)))} type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
          </p>

          <p>
            <label className="colocar_asunto">Asunto
              <span className="obligatorio">*</span>
            </label>
            <input value={asunto}
              onChange={(e) => (setAsunto((e.target.value)))} type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto" />
          </p>

          <p>
            <label className="colocar_mensaje">Mensaje
              <span className="obligatorio">*</span>
            </label>
            <textarea value={mensaje}
              onChange={(e) => (setMensaje((e.target.value)))} name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>
          </p>

          <button onClick={()=>datos()} type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

          <p className="aviso">
            <span className="obligatorio"> * </span>los campos son obligatorios.
          </p>

        
      </div>
    </div>
  </>

  )
}