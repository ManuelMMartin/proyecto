export function MainPage({Producto, productos, setAgregar, carrito}) {
   return (
      <main className="container" >
         <div className="producto">
         {productos.map((producto, index) => {
            return (
               <Producto
                  key={index}
                  carrito={carrito}
                  producto={producto}
                  agregar={() => (setAgregar(producto.id))}
               />
            )
         })}
         </div>
      </main>

   )

}