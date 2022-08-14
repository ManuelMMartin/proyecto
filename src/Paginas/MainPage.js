export function MainPage({Producto, productos, setAgregar}) {
   return (
      <main className="producto">
         {productos.map((producto, index) => {
            return (
               <Producto
                  key={index}
                  producto={producto}
                  agregar={() => (setAgregar(producto.id))}
               />
            )
         })}
      </main>

   )

}