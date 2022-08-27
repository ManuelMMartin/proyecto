import { useState } from "react"


export function Comprar({ total, carrito, setCarrito, login, Link, compras, setCompras }) {
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
         setCompras(compras+1)
         alert("Cobro efectuado")
         setCarrito([])
      } else {
         alert("Tienes que rellenar todos los campos")
      }
      
   }


   if (login) {
      return (
         <div className="container">
            <div className="formulario">
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
                     {carrito.map((producto) => {
                        return (<li className="li__compra" key={producto.id}>{producto.title} - Cantidad - {producto.cantidad} unidades. Importe {producto.cantidad * producto.price}€</li>)
                     })}
                  </ul>
                  <p className="price">Total {total.toFixed(2)}€</p>

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
         </div>
      )
   } else {

      return (
         <div className="container">
            <div className="formulario">
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
                     {carrito.map((producto) => {
                        return (<li className="li__compra" key={producto.id}>{producto.title} - Cantidad - {producto.cantidad} unidades. Importe {producto.cantidad * producto.price}€</li>)
                     })}
                  </ul>
                  <p className="price">Total {total.toFixed(2)}€</p>

                  <input
                     type="checkbox"
                     name="confirmar"
                     checked={isChecked}
                     onChange={() => setIsChecked(!isChecked)}
                  />

                  <p>¿Confirmas que los datos son correctos? {isChecked ? " Si!" : "Espera que miro..."}</p>

                  <div className="container">
                     {isChecked ? <Link to="/login"><button onClick={() => alert("Logueate para poder comprar")}>Pagar</button></Link> : ""}

                  </div>
               </div>
            </div>
         </div>
      )
   }
}