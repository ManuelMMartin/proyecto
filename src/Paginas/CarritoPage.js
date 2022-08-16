export function CarritoPage({ carrito, Carrito, agregar, setCarrito, setEliminar, total, Link }) {
   return (
      <div className="container">
         <div className="producto">
            {carrito.map((producto, index) => {
               return (
                  <div key={index} className="card">
                     <Carrito
                        agregar={agregar}
                        carrito={carrito}
                        setCarrito={setCarrito}
                        producto={producto}
                        eliminar={() => (setEliminar(producto.id))} />
                  </div>
               )
            })}
         </div>
         <div>
            <p className="price">Total {total + "€"}</p>
            <Link to="/carrito/comprar"><button onClick={() => ("")}>Comprar</button></Link>
            <button onClick={() => setCarrito([])}>Vaciar carrito</button>
         </div>
      </div>

   )
}