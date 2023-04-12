import React from 'react';
import '../styles/AsignarSitio.css'

function ContentAsignarSitio(props) {
  const datos = [
    { nombre: 'Carlos Ramirez', sitio: 'SITD15', tiempo: '6 meses' },
    { nombre: 'Alejandra Diaz', sitio: 'SITD16', tiempo: '2 meses' },
    { nombre: 'Limbert Rosado', sitio: 'SITD16', tiempo: '3 meses' },
    { nombre: 'Carlos Ramirez', sitio: 'SITD15', tiempo: '6 meses' },
    { nombre: 'Alejandra Diaz', sitio: 'SITD16', tiempo: '2 meses' },
    { nombre: 'Limbert Rosado', sitio: 'SITD16', tiempo: '3 meses' },
    { nombre: 'Carlos Ramirez', sitio: 'SITD15', tiempo: '6 meses' },
    { nombre: 'Alejandra Diaz', sitio: 'SITD16', tiempo: '2 meses' },
    { nombre: 'Limbert Rosado', sitio: 'SITD16', tiempo: '3 meses' }
  ];

  return (
    <div className='contentPage'>
        <div className="ContentAssigSite">
      <div className="ContentAssigSite-header">
        <div className="ContentAssigSite-columna">Nombre</div>
        <div className="ContentAssigSite-columna">Sitio</div>
        <div className="ContentAssigSite-columna">Tiempo</div>
      </div>
      {datos.map((dato) => (
        <div key={dato.nombre} className="ContentAssigSite-fila">
          <div className="ContentAssigSite-nombre">{dato.nombre}</div>
          <div className="ContentAssigSite-togglebars">
            <div className="ContentAssigSite-togglebar">{dato.sitio}</div>
            {/* <div className="ContentAssigSite-togglebar">Opción 2</div> */}
          </div>
          <div className="ContentAssigSite-columna">{dato.tiempo}</div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ContentAsignarSitio;
