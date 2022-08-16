import { useState } from "react"


export function Comprar({ total, carrito }) {
   let [datos, setDatos] = useState({
      card: "",
      date: "",
      cvv: "",
      total: ""
   })
   let [numCard, setNumCard] = useState("")
   let [fechaCard, setFechaCard] = useState("")
   let [cvv, setCvv] = useState("")
   let [isChecked, setIsChecked] = useState(false)

   function enviarDatosPago() {

      if (numCard !== "" && fechaCard !== "" && cvv !== "") {
         setDatos(({ card: numCard, date: fechaCard, cvv: cvv, total: total }))
         console.log(JSON.stringify(datos))
         setNumCard("")
         setFechaCard("")
         setCvv("")
         alert("Cobro efectuado")
      } else {
         alert("Tienes que rellenar todos los campos")
      }
   }

   return (
      <div className="container">

         <div className="form">

            <label>NºTarjeta<span className="obligatorio">*</span></label>
            <input
               value={numCard}
               onChange={(e) => (setNumCard((e.target.value)))}
               type="num"
               required />


            <label>Caducidad<span className="obligatorio">*</span></label>
            <input
               value={fechaCard}
               onChange={(e) => (setFechaCard((e.target.value)))}
               type="date"
               required />
            <label>CVV<span className="obligatorio">*</span></label>
            <input
               value={cvv}
               onChange={(e) => (setCvv((e.target.value)))}
               type="num"
               required />

            <p className="aviso">
               <span className="obligatorio"> * </span>los campos son obligatorios.
            </p>

            <ul>
               {carrito.map((producto, index) => {
                  return (<li key={index}>{producto.title} - Cantidad - {producto.cantidad} unidades. Importe {producto.cantidad * producto.price}€</li>)
               })}
            </ul>
            <p className="price">Total {total}€</p>

            <input
               type="checkbox"
               name="confirmar"
               checked={isChecked}
               onChange={() => setIsChecked(!isChecked)}
            />

            <p>¿Confirmas que los datos son correctos? {isChecked ? " Si!" : "Espera que miro..."}</p>

            <div className="container">
               {isChecked ? <button onClick={() => enviarDatosPago()}>Pagar</button> : ""}

            </div>
         </div>

      </div>
   )
}