export function MainPage({Producto, productos, setAgregar}) {
   return (
      <main className="container" >
         <div className="producto">
         {productos.map((producto, index) => {
            return (
               <Producto
                  key={index}
                  producto={producto}
                  agregar={() => (setAgregar(producto.id))}
               />
            )
         })}
         </div>
      </main>

   )

}