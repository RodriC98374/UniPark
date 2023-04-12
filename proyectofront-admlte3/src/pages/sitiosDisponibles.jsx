import React from 'react';
import Header from '../componets/Header';
import Aside from '../componets/Aside';

import Footer from '../componets/Footer';
import ContenidoSitiosDisponibles from '../componets/contentSitiosDisponibles';

const SitiosDisponiblesPage = () => {
  return (
    <div>
        <Header />
        <Aside />
        <ContenidoSitiosDisponibles/>
        <Footer />
    </div>
  );
}

export default SitiosDisponiblesPage;
