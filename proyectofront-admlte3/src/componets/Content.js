import React from 'react'
import Autos from './Autos'

export default function Content() {
  return (
    <div className="content-wrapper">
      
              <br />
              <br />
              <br /><br />
              <div className="container d-flex  " align="">
                <div className="row d-flex justify-content-center"  >
                   <div className='col-lg-10' ><br />
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Nombre/s</label>

                   
                   <br />
                   


                    <input style={{width: 500}} type="text " name="cliente[nombre]" id="cliente_nombre"/>
                    
                    
                  </div>
                  <div className='col-lg-3 ' ><br />
                 
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Apellido Paterno</label>

                   
                   <br />
                   


                    <input  type="text " name="cliente[Apellido_paterno]" id="cliente_Apellido_paterno"/>
                    
                    
                  </div>
                  <div className='col-lg-7'><br />
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Apellido Materno</label>

                   
                   <br />
                   


                    <input  type="text " name="cliente[Apellido_materno]" id="cliente_materno"/>
                    
                    
                  </div>
                  <div className='col-lg-10'><br />
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Codigo Sis</label>

                   
                   <br />
                   


                    <input style={{width: 500}} type="text " name="cliente[Codigo_Sis]" id="cliente_Codigo_Sis"/>
                    
                    
                  </div>
                  <div className='col-lg-10'><br />
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Correo Electronico</label>

                   
                   <br />
                   


                    <input style={{width: 500}} type="email " name="cliente[Correo_electronico]" id="cliente_Correo_electronico"/>
                    
                    
                  </div>

                  <div className='col-lg-3'><br />
                 
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Celular</label>

                   
                   <br />
                   


                    <input  type="text " name="cliente[Celular]" id="cliente_Celular"/>
                    
                    
                  </div>
                  <div className='col-lg-7'><br />
                   <label htmlFor="validationCustom01" className="form-label  " style={{position: 'relative'}}>Carnet de Identidad</label>

                   
                   <br />
                   


                    <input  type="text " name="cliente[Carnet_de_Identidad]" id="Carnet_de_Identidad"/>
                    

                    
                  </div>
                  
                  <div >
                  <br />
                  <Autos />
                  <a href='./cliente/añadirauto.html' class="btn btn-primary"
                            style={{ fontSize: "22px", border: 0, height: "51px", marginRight: "4px" }}
                        >+</a>
                  </div>
                  <div >
                  <button className="btn btn-primary" 
                  type="submit" 
                  style={{fontSize: 22, border: 0, height: "51px", marginRight: "4px" }}
                  >Registrar</button>


                  <a href='./cliente/añadirauto.html' class="btn btn-primary"
                            type="submit"

                            style={{ backgroundColor: "#F71406", fontSize: "22px", border: 0, height: "51px", marginRight: "4px" }}
                        >Cancelar</a>
                  </div>

                </div>
              </div>

    </div>
  )
}



