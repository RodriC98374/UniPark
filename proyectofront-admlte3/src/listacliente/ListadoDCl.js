import React from "react";


export default function Listaclid() {
    const clien = [
        {
            key: 1,
            Nombre: 'xa1235',
            ApellidoPateno: 'rojrto'
        },
        {
            key: 2,
            Nombre: 'xa1235',
            ApellidoPateno: 'rorjo'
        },
        {
            key: 3,
            Nombre: 'xa1235',
            ApellidoPateno: 'rowjo'
        },
        {
            key: 4,
            Nombre: 'xa1235',
            ApellidoPateno: 'rojao'
        }
        ]
    
    
    
    
    
    
    return(

        clien.map((value, index) => {
            return (
                
                <li className="list-group-item">

                   <label 
                    

                    style={{ fontSize: "22px", border: 0, height: "51px", marginRight: "4px" }}
                >{value.Nombre} {value.key} {value.ApellidoPateno}</label>
                
                <button className="btn btn-sm btn-primary ml-2 float-right ">Mostrar</button>
                <button className="btn btn-sm btn-primary ml-2 float-right">edit</button>
                <button className="btn btn-sm btn-primary ml-2 float-right">

                    borar
                    </button>
                    <button className="btn btn-sm btn-primary ml-2 float-right ">Asignar</button>
                
                </li>

                
            )
        }
        
        
        )








    )}