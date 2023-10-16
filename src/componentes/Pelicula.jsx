import React from "react";
import PropTypes from "prop-types";

function Pelicula(props) {

    let listadoDeCategorias;

    if(props.Categorias != null){
        listadoDeCategorias = 
                <ul>
                    {props.Categorias.map((categoria, i) => <li key={categoria + i}>{categoria}</li>)}                    
                </ul>
    }else{
        listadoDeCategorias = "";
    }

    return(
        <div>
            <section>
                <h1>{props.titulo}</h1>
                <p>Raiting: {props.raiting}</p>
                <p>Año: 2010</p>
                {listadoDeCategorias}
            </section>
        </div>


    );
}

Pelicula.defaultProps = {
    raiting: "Esta pelicula no tiene puntuación",
    Categorias: null
}

Pelicula.propTypes = {
    raiting: PropTypes.number,
    titulo: PropTypes.string
}


export default Pelicula;