import { useState } from "react"

export function Comprar({ total }) {
   let [numCard, setNumCard] = useState("")
   let [fechaCard, setFechaCard] = useState("")
   let [cvv, setCvv] = useState("")


   return (
      <div>
         <h2>comprar</h2>
         <div className="form">
            <div className="input-container">
               <label>NºTarjeta* </label>
               <input
                  value={numCard}
                  onChange={(e) => (setNumCard(e.target.value))}
                  type="num"
                  required />
            </div>
            <div className="input-container">
               <label>Caducidad* </label>
               <input
                  value={fechaCard}
                  onChange={(e) => (setFechaCard((e.target.value)))}
                  type="date"
                  required />
               <label>CVV* </label>
               <input
                  value={cvv}
                  onChange={(e) => (setCvv((e.target.value)))}
                  type="password"
                  required />
            </div>

            <h3>Total {total}€</h3>
            <div className="button-container">
               {/*<Link to="/"> */}<button /* onClick={login} */>Pagar</button>{/* </Link> */}

            </div>
         </div>


      </div>
   )
}