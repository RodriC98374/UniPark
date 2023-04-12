/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import './App.css';
import React from 'react'
import Header from './componets/Header'
import Aside from './componets/Aside'
import Content from './componets/Content'
import Autos from './componets/Autos'
import { Routes,  Route,} from "react-router-dom";
import Layout from "./componets/Layout.js"

import Footer from './componets/Footer'
import Menu from "./componets/Menu.js"
import Listacli from './listacliente/ListadoCli';

/*<Header />
        <Header />
        <Aside />
        <Content />        
        <Footer />*/
export default function App() {
  return (
    <Routes>
      
      
          <Route  path="/" element={<Layout/>} />
          <Route path="/final" element={<Menu />} />
          <Route path="/listaclient" element={<Listacli/>}/>

          
          
      
      
    </Routes>
  )
}
