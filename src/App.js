import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import './App.css';
import { useState, useEffect } from "react"
import Cabecera from "./components/Cabecera";
import Producto from "./components/Producto"
import Carrito from "./components/Carrito";
import Login from "./components/Login";
import Buscador from "./components/Buscador";
import { MainPage } from "./Paginas/MainPage";
import { CarritoPage } from "./Paginas/CarritoPage";
import { Comprar } from "./components/Comprar";
import { SobreNosotros } from "./components/SobreNosotros";
import { Registro } from "./components/Registro";

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
  let [eliminar, setEliminar] = useState("")
  let [carrito, setCarrito] = useState([])
  let [total, setTotal] = useState(0)
  let [user, setUser] = useState("")
  let [pass, setPass] = useState("")
  let [inputUser, setInputUser] = useState({})
  let [login, setLogin] = useState(false)
  let [suma, setSuma] = useState(0)
  let [loading, setLoading] = useState(false)
  let [compras, setCompras] = useState(0)


  /* ------------------------------------------------------------------------------------------------------ */
  /* TODOS LOS PRODUCTOS EN LA VISTA PRINCIPAL */
  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/").then(res => res.json()).then(datos => { setProductos(datos) }).catch(err => alert(`${err}, intentalo de nuevo mas tarde`))
    setLoading(false)
  }, [])
  /* TODOS LOS PRODUCTOS EN LA VISTA PRINCIPAL */
  /* ------------------------------------------------------------------------------------------------------ */
  /* LISTADO CATEGORIAS */
  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/categories").then(res => res.json()).then(datos => {
      setCategorias(datos)
    }).catch(err => alert(`${err}, intentalo de nuevo mas tarde`))
    setLoading(false)
  }, [])
  /* LISTADO CATEGORIAS */
  /* ------------------------------------------------------------------------------------------------------ */
  /* SELECCIONAR CATEGORIA */
  useEffect(() => {
    if (select !== "") {
      setLoading(true)
      fetch(`https://fakestoreapi.com/products/category/${select}`).then(res => res.json()).then(datos => {
        setCategoria(datos)
      }).catch(err => alert(`${err}, intentalo de nuevo mas tarde`))
      setLoading(false)
    }
  }, [select])
  /* SELECCIONAR CATEGORIA */
  /* ------------------------------------------------------------------------------------------------------ */
  /* MONTAR EL CARRITO */
  useEffect(() => {
    if (agregar !== "") {
      setLoading(true)
      fetch(`https://fakestoreapi.com/products/${agregar}`).then(res => res.json()).then(datos => {
        datos.cantidad = 1 /* añado cantidad a cada producto que entra al carrito */
        let enCarrito = carrito.find((productoEnCarrito) => (productoEnCarrito.id === datos.id))
        if (enCarrito) {  /* compruebo si la ID del producto ya este en el carrito */
          setCarrito(
            carrito.map((productoEnCarrito) => {
              if (productoEnCarrito.id === datos.id) {
                return { ...enCarrito, cantidad: enCarrito.cantidad + 1 }
              } else { return productoEnCarrito }
            })
          )
        } else {
          setCarrito([...carrito, datos])
        }
      }).catch(err => alert(`${err}, intentalo de nuevo mas tarde`))
    }
    setSuma(articulosCarrito())
    setAgregar("")
    setLoading(false)
  }, [agregar, eliminar, carrito])
  /* MONTAR EL CARRITO */
  /* ------------------------------------------------------------------------------------------------------ */
  /* BORRAR ELEMENTO DEL CARRITO */
  useEffect(() => {
    if (eliminar !== "") {
      setCarrito(carrito.filter(objeto => objeto.id !== parseInt(eliminar)))
    }
    setSuma(articulosCarrito())
    setEliminar("")
  }, [eliminar, carrito])
  /* BORRAR ELEMENTO DEL CARRITO */
  /* ------------------------------------------------------------------------------------------------------ */
  /* SUMO EL TOTAL DE IMPORTE EN CARRITO */
  useEffect(() => {
    let totalCarrito = carrito.map((item) => item.price * item.cantidad).reduce((a, b) => a + b, 0)
    setTotal(totalCarrito)
  }, [carrito])
  /* SUMO EL TOTAL DE IMPORTE EN CARRITO */
  /* ------------------------------------------------------------------------------------------------------ */

  function articulosCarrito() {
    let arraySuma = []
    carrito.forEach((producto) => {
      arraySuma.push(producto.cantidad)
    })
    return (arraySuma.map((item) => item).reduce((a, b) => a + b, 0))
  }

  if (loading) {
    return (
      <BrowserRouter>
        <Cabecera suma={suma} carrito={carrito} login={login} setLogin={setLogin} inputUser={inputUser} categorias={categorias} setSelect={setSelect} />
        <h2>Cargando...</h2>
      </BrowserRouter>
    )
  } else {

    return (
      <BrowserRouter>
        <Cabecera suma={suma} carrito={carrito} login={login} setLogin={setLogin} inputUser={inputUser} categorias={categorias} setSelect={setSelect} />

        <Routes>
          <Route path="/buscador" element={
            <Buscador
              productos={productos}
              agregar={(event) => (setAgregar(event.target.value))}
              carrito={carrito}
              setAgregar={setAgregar}
            />} />

          <Route path="/sobre_nosotros" element={
            <SobreNosotros
            />} />

          <Route path="/login" element={
            <Login
              user={user}
              setUser={setUser}
              pass={pass}
              setPass={setPass}
              login={login}
              setLogin={setLogin}
              setInputUser={setInputUser}
              inputUser={inputUser}
              carrito={carrito}
              compras={compras}
            />} />

          <Route path="/login/registro" element={
            <Registro />
          } />

          <Route path="/" element={
            <MainPage
              productos={productos}
              carrito={carrito}
              Producto={Producto}
              setAgregar={setAgregar}
            />} />

          <Route path="/categorias/categoria" element={<>
            <div className="container">
              <div className="producto">
                {categoria.map((producto) => {
                  return (
                    <Producto
                      key={producto.id}
                      carrito={carrito}
                      producto={producto}
                      agregar={() => (setAgregar(producto.id))}
                    />
                  )
                })}
              </div>
            </div>
          </>} />
          <Route path="/carrito" element={
            <CarritoPage
              carrito={carrito}
              Carrito={Carrito}
              agregar={agregar}
              setCarrito={setCarrito}
              setEliminar={setEliminar}
              total={total}
              Link={Link}
            />} />

          <Route path="/carrito/comprar" element={
            <Comprar
              total={total}
              carrito={carrito}
              setCarrito={setCarrito}
              login={login}
              Link={Link}
              compras={compras}
              setCompras={setCompras}

            />} />



        </Routes>
        <footer className="footer__container container">Copyright © 2022 MegaSquall Shopping Center</footer>
      </BrowserRouter>
    );
  }
}



export default App;
