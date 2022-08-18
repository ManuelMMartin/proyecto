import { useState, useEffect } from "react"
function Producto({ producto, agregar, index, carrito }) {
  let [agregado, setAgregado] = useState(false)
  
  useEffect(() => {

    carrito.map((productoEnCarrito) => {
      if (productoEnCarrito.id === producto.id) {
        setAgregado(true)
      }
    })

  }, [carrito])



  return (
    <div key={producto.id} className="card">
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h2>{producto.title}</h2>
            <p className="price">{producto.price} €</p>
          </div>
          <div className="image">
            <img src={producto.image} alt="" />
          </div>
        </div>
      </div>
      <div className="action">
        {agregado?
          <button className="button__add" onClick={agregar} value={producto.id} type="button">Agregado</button> :
          <button onClick={agregar} value={producto.id} type="button">Agregar</button>}
      </div>
    </div>
  )
}

export default Producto