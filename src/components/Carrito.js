
function Carrito({ producto, eliminar, carrito, setCarrito }) {

   function sumar(props) {
      console.log(parseInt(props))
      for (const i in carrito) {
         if (carrito[i].id === parseInt(props)) {
            console.log(carrito[i])
            setCarrito([...carrito, { ...carrito[i], cantidad: carrito[i].cantidad + 1 }])
         }
      }

   }



   function restar() {
      setCarrito(
         carrito.map((productoEnCarrito) => {
            return productoEnCarrito.cantidad > 1 ? { ...productoEnCarrito, cantidad: productoEnCarrito.cantidad - 1 } : { ...productoEnCarrito, cantidad: productoEnCarrito.cantidad }
         })
      )
   }

   return (
      <>
         <div className="card__body">
            <div className="half">
               <div className="featured_text">
                  <h2>{producto.title}</h2>
                  <p className="price">{(producto.cantidad * producto.price)} €</p>
                  <button value={producto.id} onClick={(e) => (sumar(e.target.value))}>+</button>
                  <p>{producto.cantidad}</p>
                  <button value={producto.id} onClick={(e) => (restar(e.target.value))}>-</button>
               </div>
               <div className="image__cart">
                  <img src={producto.image} alt={producto.title} />
               </div>
            </div>
         </div>
         <div className="action">
            <button onClick={eliminar} value={producto.id} type="button">Eliminar</button>
         </div>
      </>
   )
}


export default Carrito