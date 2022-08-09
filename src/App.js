import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import './App.css';
import { useState, useEffect } from "react"
import Cabecera from "./components/Cabecera";
import Producto from "./components/Producto"
import Carrito from "./components/Carrito";
import Login from "./components/Login";

// Obtener todas las categorías => `https://fakestoreapi.com/products/categories`
// Obtener todos los productos => `https://fakestoreapi.com/products`
// Obtener productos por ID => `https://fakestoreapi.com/products/${ID}`
// Obtener productos en una categoría específica => `https://fakestoreapi.com/products/category/${categoria}`

function App() {
  let [productos, setProductos] = useState([])
  let [categorias, setCategorias] = useState([])
  let [categoria, setCategoria] = useState([])
  let [select, setSelect] = useState("")
  let [agregar, setAgregar] = useState("")
  let [num, setNum] = useState(0)
  let [eliminar, setEliminar] = useState("")
  let [carrito, setCarrito] = useState([])
  let [total, setTotal] = useState(0)
  let [user, setUser] = useState("")
  let [pass, setPass] = useState("")
  let [login, setLogin] = useState(false)

  /* TODOS LOS PRODUCTOS EN LA VISTA PRINCIPAL */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(res => res.json()).then(datos => { setProductos(datos) })
  }, [])
  /* TODOS LOS PRODUCTOS EN LA VISTA PRINCIPAL */

  /* LISTADO CATEGORIAS */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories").then(res => res.json()).then(datos => {
      setCategorias(datos)
    })
  }, [])
  /* LISTADO CATEGORIAS */

  /* SELECCIONAR CATEGORIA */
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${select}`).then(res => res.json()).then(datos => {
      setCategoria(datos)
    })
  }, [select])
  /* SELECCIONAR CATEGORIA */

  /* MONTAR EL CARRITO */
  useEffect(() => {
    if (agregar !== "") {
      setNum(num + 1)
      fetch(`https://fakestoreapi.com/products/${agregar}`).then(res => res.json()).then(datos => {
        let nuevoCarrito = [...carrito, datos]
        setCarrito(nuevoCarrito)
        setTotal(total + datos.price) /* va sumando los precios */
      })
    }

    setAgregar("")
  }, [agregar])
  /* MONTAR EL CARRITO */

  /* BORRAR ELEMENTO DEL CARRITO */
  useEffect(() => {

    if (eliminar !== "") {
      
      setNum(num - 1)
      setCarrito(carrito.filter(objeto => objeto.id != eliminar))

    }
    /* -------------------------------------------------------------------------------------------------- */
    setTotal(0)
    let nuevoCarrito = [...carrito]
    nuevoCarrito.map((producto) => {
      setTotal(total + producto.price)
    })
    /* -------------------------------------------------------------------------------------------------- */
    setEliminar("")
  }, [eliminar])

  /* BORRAR ELEMENTO DEL CARRITO */

  return (
    <BrowserRouter>
      <Cabecera
        num={num}
        carrito={carrito}
        login={login}
        setLogin={setLogin} />

      <Routes>
        <Route path="/login" element={
          <Login
            user={user}
            setUser={setUser}
            pass={pass}
            setPass={setPass}
            login={login}
            setLogin={setLogin} />} />
        <Route path="/" element={
          <main className="producto">
            {productos.map((producto, index) => {
              return (
                <Producto
                  key={index}
                  producto={producto}
                  agregar={(event) => (setAgregar(event.target.value))}
                />
              )
            })}
          </main>}
        />
        <Route path="/categorias" element={
          <nav>
            <div className="container">
              {categorias.map((categoria, index) => {
                return (<h2 key={index} ><Link to="/categorias/categoria"><button className="button__nav" value={categoria} onClick={(e) => (setSelect(e.target.value))}>{categoria}</button></Link></h2>)
              })}
            </div>
          </nav>} />
        <Route path="/categorias/categoria" element={<>
          <button><Link to="/categorias">volver</Link></button>
          <div className="producto">
            {categoria.map((producto, index) => {
              return (
                <Producto
                  key={index}
                  producto={producto}
                  agregar={(event) => (setAgregar(event.target.value))}
                />
              )
            })}
          </div>
        </>} />
        <Route path="/carrito" element={
          <>
            <div className="carrito">
              {carrito.map((producto, index) => {
                return (<>
                  <Carrito
                    key={index}
                    agregar={agregar}
                    carrito={carrito}
                    producto={producto}
                    eliminar={(event) => (setEliminar(event.target.value))} />
                </>
                )
              })}
            </div>
            <div>
              <h2>Total {total + "€"}</h2>
              <button>Comprar</button>
            </div>
          </>
        } />

      </Routes>
      <footer>Copyright © 2022 MegaSquall Shopping Center</footer>
    </BrowserRouter>
  );
}



export default App;
