
function Carrito({ producto, eliminar, carrito, setCarrito }) {

   function modificar(props) {
      let cantidad = props ? 1 : -1
      for (const i in carrito) {
         if (carrito[i].id === producto.id) {
            let nuevoCarrito = [...carrito]
            nuevoCarrito[i].cantidad = carrito[i].cantidad + cantidad
            if (nuevoCarrito[i].cantidad > 0) {
               setCarrito(nuevoCarrito)
            } else {
               eliminar(producto.id)
               setCarrito(nuevoCarrito)
            }
         }
      }
   }

   return (
      <>
         <div className="card__body">
            <div className="half">
               <div className="featured_text">
                  <h2>{producto.title}</h2>
                  <p className="price">{(producto.cantidad * producto.price)} €</p>

               </div>
               <div className="image__cart">
                  <img src={producto.image} alt={producto.title} />
               </div>
               <div className="container__button">
                  <button className="button__masMenos" onClick={() => (modificar(true))}>+</button>
                  <p>{producto.cantidad}</p>
                  <button className="button__masMenos" onClick={() => (modificar(false))}>-</button>
               </div>
            </div>
         </div>
         <div className="action">
            <button onClick={eliminar} type="button">Eliminar</button>
         </div>
      </>
   )
}


export default Carrito