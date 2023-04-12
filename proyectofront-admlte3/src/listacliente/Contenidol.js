import React from "react";
import Listaclid from "./ListadoDCl";

const Cuentas = () => {
  return (
    <div className="content-wrapper">
      <div className="container d-flex  ">
        <div className="row d-flex justify-content-center">
          <label
            htmlFor="validationCustom01"
            className="form-label  "
            style={{ alignSelf: "center", fontSize:"30px" }}          >
            Listado de Clientes
          </label>
          <br/>
          </div>
          </div>
          <div>
          
          <cuerpo className=" sidebar-white-primary elevation-4">


            <Listaclid/>
          </cuerpo>
          
        </div>
      
    </div>
  );
};
export default Cuentas;
