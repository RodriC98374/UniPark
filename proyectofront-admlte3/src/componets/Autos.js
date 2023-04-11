import React from "react";


const auto = [
{
    key: 1,
    placa: 'xa1235',
    color: 'rojo'
},
{
    key: 2,
    placa: 'xf1234',
    color: 'rojo'
},
{
    key: 3,
    placa: 'xq1236',
    color: 'rojo'
},
{
    key: 4,
    placa: 'xg1238',
    color: 'rojo'
}
]

const Autos = () => {
    return (
        
            
                
                auto.map((value, index) => {
                    return (
                        
                        

                           <label class="btn "
                            

                            style={{ fontSize: "22px", border: 0, height: "51px", marginRight: "4px" }}
                        >{value.placa}</label>
                        
                    

                        
                    )
                }
                
                
                )
                
                
            

        
    )
}
export default Autos;