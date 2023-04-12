import React from 'react';
import Header from '../componets/Header';
import Aside from '../componets/Aside';

import Footer from '../componets/Footer';
import ContentAsignarSitio from '../componets/ContentAssigSite';

const AsignarSitio = () => {
  return (
    <div>
      <Header />
        <Aside />
        <ContentAsignarSitio/>
        <Footer />
    </div>
  );
}

export default AsignarSitio;
