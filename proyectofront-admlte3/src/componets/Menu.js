import Aside from "./Aside";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React from "react";
import { Link, Outlet}   from "react-router-dom"

const Menu =() => {
    return (
            <div>
            <Header />            
            <Aside/>
            <Content />        
            <Footer />
            <Outlet />
            </div>
)
}
export default Menu;