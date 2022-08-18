import { useState, useEffect } from "react"
import Producto from "./Producto"

function Buscador({ productos, setAgregar, carrito }) {
   let [buscar, setBuscar] = useState("")
   let [busqueda, setBusqueda] = useState([])


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

      <div className="container" >
         <input
            className="input-container"
            value={buscar}
            onChange={(e) => (setBuscar((e.target.value)))}
            type="text"
            placeholder="¿Que buscas?" />
         <div className="container">
            <div className="producto">
               {busqueda.map((producto) => {
                  return (
                     <Producto
                        key={producto.id}
                        carrito={carrito}
                        producto={producto}
                        agregar={() => (setAgregar(producto.id))}
                     />
                  )
               })}
            </div>
         </div>
      </div>

   )
}

export default Buscador