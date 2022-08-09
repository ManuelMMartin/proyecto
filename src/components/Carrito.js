import { useState, useEffect } from "react"

function Carrito({agregar, producto, eliminar, index, setTotal, total, carrito }) {
   let [cantidad, setCantidad] = useState(1)

   function sumar() {
      setCantidad(++cantidad)
   }
   function restar() {
      cantidad > 1 ? setCantidad(--cantidad) : setCantidad(1)
   }

   return (

      <div key={index} className="card">
         <div className="card__body">
            <div className="half">
               <div className="featured_text">
                  <h1>{producto.title}</h1>
                  <p className="price">{(cantidad * producto.price)} €</p>
                  <button onClick={(sumar)}>+</button>
                  <p>{cantidad}</p>
                  <button onClick={(restar)} >-</button>
               </div>
               <div className="image-cart">
                  <img src={producto.image} alt={producto.title} />
               </div>
            </div>
         </div>
         <div className="action">
            <button onClick={eliminar} value={producto.id} type="button">Eliminar</button>
         </div>
      </div>
   )
}



export default Carrito