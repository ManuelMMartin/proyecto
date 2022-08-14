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
  let [login, setLogin] = useState(false)
  let [suma, setSuma] = useState(0)

  /* ------------------------------------------------------------------------------------------------------ */
  /* TODOS LOS PRODUCTOS EN LA VISTA PRINCIPAL */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(res => res.json()).then(datos => { setProductos(datos) })
  }, [])
  /* TODOS LOS PRODUCTOS EN LA VISTA PRINCIPAL */
  /* ------------------------------------------------------------------------------------------------------ */
  /* LISTADO CATEGORIAS */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories").then(res => res.json()).then(datos => {
      setCategorias(datos)
    })
  }, [])
  /* LISTADO CATEGORIAS */
  /* ------------------------------------------------------------------------------------------------------ */
  /* SELECCIONAR CATEGORIA */
  useEffect(() => {
    if (select !== "") {
      fetch(`https://fakestoreapi.com/products/category/${select}`).then(res => res.json()).then(datos => {
        setCategoria(datos)
      })
    }
  }, [select])
  /* SELECCIONAR CATEGORIA */
  /* ------------------------------------------------------------------------------------------------------ */
  /* MONTAR EL CARRITO */
  useEffect(() => {
    if (agregar !== "") {
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
      })
    }

    let arraySuma = []
    carrito.forEach((producto) => {
      arraySuma.push(producto.cantidad)
    })
    setSuma(arraySuma.map((item) => item).reduce((a, b) => a + b, 1))


    setAgregar("")
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

  /* useEffect(() => {
    
    let arraySuma = []
      carrito.forEach((producto) => {
        arraySuma.push(producto.cantidad)
      })
      return (arraySuma.map((item) => item).reduce((a, b) => a + b, 0))
  
  }, [carrito]) */


  function articulosCarrito() {
    let arraySuma = []
    carrito.forEach((producto) => {
      arraySuma.push(producto.cantidad)
    })
    return (arraySuma.map((item) => item).reduce((a, b) => a + b, 0))
  }




  return (
    <BrowserRouter>
      <Cabecera suma={suma} carrito={carrito} login={login} setLogin={setLogin} />

      <Routes>
        <Route path="/buscador" element={
          <Buscador
            productos={productos}
            agregar={(event) => (setAgregar(event.target.value))}
          />} />

        <Route path="/login" element={
          <Login
            user={user}
            setUser={setUser}
            pass={pass}
            setPass={setPass}
            login={login}
            setLogin={setLogin}
          />} />

        <Route path="/" element={
          <MainPage
            productos={productos}
            Producto={Producto}
            setAgregar={setAgregar}
          />} />

        <Route path="/categorias" element={
          <nav>
            <div className="container">
              {categorias.map((categoria, index) => {
                return (<Link key={index} to="/categorias/categoria"><button className="button__nav" value={categoria} onClick={(e) => (setSelect(e.target.value))}>{categoria}</button></Link>)
              })}
            </div>
          </nav>
        } />
        <Route path="/categorias/categoria" element={<>
          <Link to="/categorias"><button>volver</button></Link>
          <div className="producto">
            {categoria.map((producto, index) => {
              return (
                <Producto
                  key={index}
                  producto={producto}
                  agregar={() => (setAgregar(producto.id))}/* modificado */
                />
              )
            })}
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

          />} />



      </Routes>
      <footer>Copyright © 2022 MegaSquall Shopping Center</footer>
    </BrowserRouter>
  );
}



export default App;
