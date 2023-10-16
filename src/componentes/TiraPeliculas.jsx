import React from "react";
import Pelicula from "./Pelicula";
import Contenedor from "./Contenedor";

function TiraPeliculas(){
    return (
        <div>
            <Contenedor>
                <p>Acá inicia</p>
            </Contenedor>
            <Pelicula Categorias={["Aventura", "Ficcón"]} raiting={8.0} titulo="Harry Poter" />
            <Pelicula Categorias={["Acción ", "Ficcón"]} raiting={9.5} titulo="Batman" />
            <Contenedor>
                <p>Acá finaliza</p>
            </Contenedor>
        </div>


    );
}


export default TiraPeliculas;