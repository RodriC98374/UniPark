import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeAdmin from './pages/homeAdmin';
import AsignarSitio from './pages/assignSite';
import SitiosDisponiblesPage from './pages/sitiosDisponibles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <HomeAdmin /> }/>
        <Route exact path="/sitiosOcupados" element={ < AsignarSitio/> }/>
        <Route exact path="/sitiosDisponibles" element={ < SitiosDisponiblesPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import React from 'react'
// //import Header from './componets/Header'
// //import Aside from './componets/Aside'
// //import Content from './componets/Content'
// //import Autos from './componets/Autos'


// //import Footer from './componets/Footer'
// //import { BrowserRouter, Router, Route } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import HomeAdmin from './pages/homeAdmin';
// import AsignarSitio from './pages/assignSite';
// //import {Router, Route } from 'react-router-dom';

// function App() {
//   return (
//       <BrowserRouter>
//         <Router>
//           <Route exact path="/" component={HomeAdmin} />
//           <Route path="/asignarSitio" component={AsignarSitio} />
//         </Router>
//       </BrowserRouter>
//   )
// }


// export default App;