import React from 'react';
import '../styles/AsignarSitio.css'

function ContenidoSitiosDisponibles(props) {
  const datos = [
    { sitio: 'SITD15', tiempo: '6 meses' },
    { sitio: 'SITD16', tiempo: '2 meses' },
    { sitio: 'SITD16', tiempo: '3 meses' },
    { sitio: 'SITD15', tiempo: '6 meses' },
    { sitio: 'SITD16', tiempo: '2 meses' },
    { sitio: 'SITD16', tiempo: '3 meses' },
    { sitio: 'SITD15', tiempo: '6 meses' },
    { sitio: 'SITD16', tiempo: '2 meses' },
    { sitio: 'SITD16', tiempo: '3 meses' }
  ];

  return (
    <div className='contentPage'>
        <div className="ContentAssigSite">
      <div className="ContentAssigSite-header">
        <div className="ContentAssigSite-columna">Sitio</div>
        <div className="ContentAssigSite-columna">Estatus</div>
      </div>
      {datos.map((dato) => (
        <div key={dato.nombre} className="ContentAssigSite-fila">
          <div className="ContentAssigSite-togglebars">
            <div className="ContentAssigSite-togglebar">{dato.sitio}</div>
            {/* <div className="ContentAssigSite-togglebar">Opción 2</div> */}
          </div>
          <div className="ContentAssigSite-columna">libre</div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ContenidoSitiosDisponibles;
