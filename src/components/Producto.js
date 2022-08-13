
function Producto({ producto, agregar, index}) {

  return (
    <div key={index} className="card">
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
        <button onClick={agregar} value={producto.id} type="button">Agregar</button>
      </div>
    </div>
  )
}

export default Producto