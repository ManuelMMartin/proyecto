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
            <p className="price">Total {total.toFixed(2) + "€"}</p>
            {carrito.length !== 0 ? <Link to="/carrito/comprar"><button onClick={() => ("")}>Comprar</button></Link> : <button onClick={() => alert("Deberias llenar primero el carrito no?")}>Comprar</button>}
            <button onClick={() => setCarrito([])}>Vaciar carrito</button>
         </div>
      </div>

   )
}