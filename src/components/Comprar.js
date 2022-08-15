import { useState } from "react"


export function Comprar({ total, carrito }) {
   let [datos, setDatos] = useState({
      card: "",
      date: "",
      cvv: "",
      total:""
   })
   let [numCard, setNumCard] = useState("")
   let [fechaCard, setFechaCard] = useState("")
   let [cvv, setCvv] = useState("")
   let [isChecked, setIsChecked] = useState(false)

   function enviarDatosPago() {
      setDatos(({card:numCard,date:fechaCard,cvv:cvv,total:total}))
      console.log(JSON.stringify(datos)) 
      setNumCard("")
      setFechaCard("")
      setCvv("")
      alert("Cobro efectuado")


   }

   return (
      <div>
         <h2>comprar</h2>
         <div className="form">
            <div className="container">
               <label>NºTarjeta<span className="obligatorio">*</span></label>
               <input
                  value={numCard}
                  onChange={(e) => (setNumCard((e.target.value)))}
                  type="num"
                  required />
            </div>
            <div className="container">
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
            </div>
            <p className="aviso">
               <span className="obligatorio"> * </span>los campos son obligatorios.
            </p>

            <div className="container">
               <ul>
                  {carrito.map((producto, index) => {
                     return (<li key={index}>{producto.title} - Cantidad - {producto.cantidad} unidades. Importe {producto.cantidad * producto.price}€</li>)
                  })}
               </ul>

               <div className="container">
                  <input
                     type="checkbox"
                     name="confirmar"
                     checked={isChecked}
                     onChange={() => setIsChecked(!isChecked)}
                  />
               </div>
               <div className="container">
                  <p>¿Confirmas que los datos son correctos? {isChecked ? " Si!" : "Espera que miro..."}</p>
               </div>
            </div>
            <h3>Total {total}€</h3>



            <div className="button-container">
               {isChecked ? <button onClick={()=>enviarDatosPago()}>Pagar</button> : ""}

            </div>
         </div>



      </div>
   )
}