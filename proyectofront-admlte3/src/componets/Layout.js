import { Link, Outlet}   from "react-router-dom"
import Aside from "../listacliente/Asidelista"
import Header from "./Header"
import Footer from "./Footer"
import Contentido from "../listacliente/Contenidolista"


const Layout =()=>{
    return (<div>
      <Header/>

      <Aside/>
      <Contentido/>
      <Footer/>


    </div>)
}
export default Layout;