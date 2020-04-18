import React from 'react';

const Buscador = (props) => {

  return(
   <React.Fragment>
    <h3>Búsqueda de GIFS</h3>
    <input onChange={props.grabarDato} type="text" placeholder="Introduce texto" name="busqueda"/>
   </React.Fragment>
  )

}
export default Buscador;