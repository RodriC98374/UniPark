import React, { useState } from "react";
import Autos from "./Autos";

const Content = () => {
  const [nombre, setNombre] = useState("");
  const [Apellido_paterno, setApellido_paterno] = useState("");
  const [Apellido_materno, setApellido_materno] = useState("");
  const [Codigo_Sis, setCodigo_Sis] = useState("");
  const [Correo_electronico, setCorreo_electronico] = useState("");
  const [Celular, setCelular] = useState("");
  const [Carnet_de_Identidad, setCarnet_de_Identidad] = useState("");
  const [lista, setLista] = useState([]);
  const [error, setError] = useState("");
  const [fallo, setFallo] = useState(true);
  const [errorM, setErrorM] = useState("");
  const [falloM, setFalloM] = useState(true);
  const [errorp, setErrorp] = useState("");
  const [fallop, setFallop] = useState(true);
  const [errorCS, setErrorCS] = useState("");
  const [falloCS, setFalloCS] = useState(true);
  const [errorCE, setErrorCE] = useState("");
  const [falloCE, setFalloCE] = useState(true);
  const [errorCl, setErrorCl] = useState("");
  const [falloCl, setFalloCl] = useState(true);
  const [errorCI, setErrorCI] = useState("");
  const [falloCI, setFalloCI] = useState(true);

  const AgregarCliente = (e) => {
    //validaciones nombre
    if (!nombre.trim()) {
      setFallo(true);
      setError("Debe ingrsar un nombre");
    } else {
      if (nombre.match("  ")) {
        setFallo(true);
        setError("*Solo se acepta 1 espacio después de un Nombre ");
      } else {
        if (nombre.match(/[^a-zA-Z-ÿ\u00f1\u00d1\u00E0-\u00FC\u00DC\s]/)) {
          setFallo(true);
          setError("*Solo acepta letras ");
        } else {
          {
            setFallo(false);
            setError("");
          }
        }
      }
    }

    //validaciones apellido m
    if (!Apellido_materno.trim()) {
      setFalloM(true);
      setErrorM("Debe ingrsar un Apellido_materno");
    } else {
      if (Apellido_materno.match("  ")) {
        setFalloM(true);
        setErrorM("*Solo se acepta 1 espacio después de un Apellido_materno ");
      } else {
        if (
          Apellido_materno.match(/[^a-zA-Z-ÿ\u00f1\u00d1\u00E0-\u00FC\u00DC\s]/)
        ) {
          setFalloM(true);
          setErrorM("*Solo acepta letras ");
        } else {
          {
            setFalloM(false);
            setErrorM("");
          }
        }
      }
    }

    //validaciones apellido p

    if (!Apellido_paterno.trim()) {
      setFallop(true);
      setErrorp("Debe ingrsar un Apellido paterno");
    } else {
      if (Apellido_paterno.match("  ")) {
        setFallop(true);
        setErrorp("*Solo se acepta 1 espacio después de un Apellido_paterno ");
      } else {
        if (
          Apellido_paterno.match(/[^a-zA-Z-ÿ\u00f1\u00d1\u00E0-\u00FC\u00DC\s]/)
        ) {
          setFallop(true);
          setErrorp("*Solo acepta letras ");
        } else {
          {
            setFallop(false);
            setErrorp("");
          }
        }
      }
    }

    //validaciones cod sis
    if (!Codigo_Sis.trim()) {
      setFalloCS(true);
      setErrorCS("Debe ingrsar un Codigo Sis");
    } else {
      if (Codigo_Sis.match(/[^0-9]/)) {
        setFalloCS(true);
        setErrorCS("*Solo acepta numeros ");
      } else {
        {
          setFalloCS(false);
          setErrorCS("");
        }
      }
    }

    //validaciones correo electronico
    if (!Correo_electronico.trim()) {
      setFalloCE(true);
      setErrorCE("Debe ingrsar un Correo electronico");
    } else {
      if (Correo_electronico.match(" ")) {
        setFalloCE(true);
        setErrorCE("*No debe iniciar con un espacio");
      } else {
        if (Correo_electronico.match(/[^\w\.@\s]/)) {
          setFalloCE(true);
          setErrorCE("*Se está ingresando caracteres especiales no válidos");
        } else {
          setFalloCE(false);
          setErrorCE("");
        }
      }
    }
    //validaciones celular
    if (!Celular.trim()) {
      setFalloCl(true);
      setErrorCl("Debe ingrsar un Celular");
    } else if (Celular.match(/[^0-9]/)) {
      setFalloCl(true);
      setErrorCl("*Solo acepta dígitos numericos");
    } else {
      if (Celular.length != 8) {
        setFalloCl(true);
        setErrorCl("debe tener 8 digitos");
      } else {
        if (parseInt(Celular) < 60000000 || parseInt(Celular) > 79999999) {
          setFalloCl(true);
          setErrorCl("*Tiene que empezar con el dígito 6 o 7");
        } else {
          setFalloCl(false);
          setErrorCl("");
        }
      }
    }
    //validaciones carnet
    if (!Carnet_de_Identidad.trim()) {
      setFalloCI(true);
      setErrorCI("Debe ingrsar un Carnet_de_Identidad");
    } else {
      if (Carnet_de_Identidad.match(/\D/)) {
        setFalloCI(true);
        setErrorCI("*Solo acepta dígitos numericos");
      } else {
        setFalloCI(false);
        setErrorCI("");
      }
    }

    if (fallo || falloM || fallop || falloCE || falloCI || falloCS || falloCl) {
      return;
    } else {
      //guardado
      const cleinte = {
        nombre,
        Apellido_materno,
        Apellido_paterno,
      };
      setLista([...lista, cleinte]);
    }
  };

  return (
    <div className="content-wrapper">
      <br />
      
      <div className="container d-flex  " align="">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10">
            <br />
            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ alignSelf: "center" }}
            >
              Nombre/s
            </label>

            <br />

            <input
              style={{ width: 500 }}
              type="text "
              name="cliente[nombre]"
              id="cliente_nombre"
              placeholder="Escriba el Nombre aqui"
              //onBlur={handleBlur}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              //value={form.name}
              required
            />
            <div style={{ color: "red" }}>
              {fallo ? <span>{error}</span> : <span></span>}
            </div>
          </div>
          <div className="col-lg-3 ">
            <br />

            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ position: "relative" }}
            >
              Apellido Paterno
            </label>

            <br />

            <input
              style={{ width: 250 }}
              type="text "
              name="cliente[Apellido_paterno]"
              id="cliente_Apellido_paterno"
              placeholder="Escribe el Apellido P. aqui"
              onChange={(e) => {
                setApellido_paterno(e.target.value);
              }}
            />
            <div style={{ color: "red" }}>
              {fallop ? <span>{errorp}</span> : <span></span>}
            </div>
          </div>
          <div className="col-lg-7">
            <br />
            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ position: "relative" }}
            >
              Apellido Materno
            </label>

            <br />

            <input
              type="text "
              name="cliente[Apellido_materno]"
              id="cliente_materno"
              style={{ width: 250 }}
              placeholder="Escribe el Apellido M. aqui"
              onChange={(e) => {
                setApellido_materno(e.target.value);
              }}
            />
            <div style={{ color: "red" }}>
              {falloM ? <span>{errorM}</span> : <span></span>}
            </div>
          </div>
          <div className="col-lg-10">
            <br />
            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ position: "relative" }}
            >
              Codigo Sis
            </label>

            <br />

            <input
              style={{ width: 500 }}
              type="text "
              name="cliente[Codigo_Sis]"
              id="cliente_Codigo_Sis"
              placeholder="Escribe el Codigo Sis aqui"
              onChange={(e) => {
                setCodigo_Sis(e.target.value);
              }}
            />
            <div style={{ color: "red" }}>
              {falloCS ? <span>{errorCS}</span> : <span></span>}
            </div>
          </div>
          <div className="col-lg-10">
            <br />
            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ position: "relative" }}
            >
              Correo Electronico
            </label>

            <br />

            <input
              style={{ width: 500 }}
              type="email "
              name="cliente[Correo_electronico]"
              id="cliente_Correo_electronico"
              placeholder="Escribe el Correo Electronico aqui"
              onChange={(e) => {
                setCorreo_electronico(e.target.value);
              }}
            />
            <div style={{ color: "red" }}>
              {falloCE ? <span>{errorCE}</span> : <span></span>}
            </div>
          </div>

          <div className="col-lg-3">
            <br />

            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ position: "relative" }}
            >
              Celular
            </label>

            <br />

            <input
              type="text"
              style={{ width: 250 }}
              name="cliente[Celular]"
              id="cliente_Celular"
              placeholder="Escribe tu Celular aqui"
              onChange={(e) => {
                setCelular(e.target.value);
              }}
            />
            <div style={{ color: "red" }}>
              {falloCl ? <span>{errorCl}</span> : <span></span>}
            </div>
          </div>
          <div className="col-lg-7">
            <br />
            <label
              htmlFor="validationCustom01"
              className="form-label  "
              style={{ position: "relative" }}
            >
              Carnet de Identidad
            </label>

            <br />

            <input
              type="text "
              style={{ width: 250 }}
              name="cliente[Carnet_de_Identidad]"
              id="Carnet_de_Identidad"
              placeholder="Escribe tu CI aqui"
              onChange={(e) => {
                setCarnet_de_Identidad(e.target.value);
              }}
            />
            <div style={{ color: "red" }}>
              {falloCI ? <span>{errorCI}</span> : <span></span>}
            </div>
          </div>

          <div>
            <br />
            <Autos />
            <a
              href="./cliente/añadirauto.html"
              class="btn btn-primary"
              style={{
                fontSize: "22px",
                border: 0,
                height: "51px",
                marginRight: "4px",
              }}
            >
              +
            </a>
          </div>
        </div>
      </div>
      <div className="container" align="center">
        <div>
          <button
            onClick={(e) => {
              AgregarCliente(e);
            }}
            className="btn btn-primary "
            type="submit"
            style={{
              fontSize: 22,
              border: 0,
              height: "51px",
              marginRight: "4px",
            }}
          >
            Registrar
          </button>

          <a
            href="./homeadmin.html"
            class="btn btn-primary"
            type="submit"
            style={{
              backgroundColor: "#F71406",
              fontSize: "22px",
              border: 0,
              height: "51px",
              marginRight: "4px",
            }}
          >
            Cancelar
          </a>
        </div>
      </div>
{/*
      <ul className="list-group">
        <>lista creado</>
        {lista.map((i) => (
          <li className="list-group-item">
            {i.nombre} y {i.Apellido_materno}
            <button className="btn btn-sm btn-primary float-right">edit</button>
            <button className="btn btn-sm btn-primary float-right">
              borar
            </button>
          </li>
        ))}
      </ul>*/}
        </div>
  );
};

export default Content;
