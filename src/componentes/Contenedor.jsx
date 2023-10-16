import React from "react";

function Contenedor(props){
    return (
        <div>
            <h1>----Incio----</h1>
            {props.children}
            <h1>----Incio----</h1>
        </div>
    );
}


export default Contenedor;