import { useState, useEffect } from "react"
function Buscador({ productos, agregar }) {
   let [buscar, setBuscar] = useState("")
   let [busqueda, setBusqueda] = useState([])

   /* let nuevoCarrito = [...carrito, datos]
           setCarrito(nuevoCarrito) */

   useEffect(() => {
      if (buscar !== "") {
         let arrayBusqueda = []
         productos.map((producto) => {
            if (producto.title.toUpperCase().includes(buscar.toUpperCase())) {
               arrayBusqueda.push(producto)
               setBusqueda(arrayBusqueda)
            }
         })
      } else {
         setBusqueda([])
      }
   }, [buscar])



   return (
      <>
         <input
            className="input-container"
            value={buscar}
            onChange={(e) => (setBuscar((e.target.value)))}
            type="text"
            placeholder="¿Que buscas?" />


         <div className="producto">
            {busqueda.map((producto, index) => {
               return (
                  <div key={index} className="card">
                     <div className="card__body">
                        <div className="half">
                           <div className="featured_text">
                              <h2>{producto.title}</h2>
                              <p className="price">{producto.price} €</p>
                           </div>
                           <div className="image-cart">
                              <img src={producto.image} alt="" />
                           </div>
                        </div>
                     </div>
                     <div className="action">
                        <button onClick={agregar} value={producto.id} type="button">Agregar</button>
                     </div>
                  </div>
               )
            })}
         </div>
      </>
   )
}

export default Buscador