export function CarritoPage({ carrito, Carrito, agregar, setCarrito, setEliminar, total, Link }) {
   return (
      <>
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
            <h2>Total {total + "€"}</h2>
            <Link to="/carrito/comprar"><button onClick={() => ("")}>Comprar</button></Link>
            <button onClick={() => setCarrito([])}>Vaciar carrito</button>
         </div>
      </>

   )
}