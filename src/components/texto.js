import React from 'react';
import {Link} from 'wouter';
const Texto = (props) => {

    return(
        <div className="contenido-texto">
          {props.children}
        <Link to="/">Regresar a Inicio</Link>
        </div>
        

    )
}

export default Texto;