import React from 'react';
import {Link} from 'wouter';

const Menu = () => {

    return(
        <nav id="menu-principal">
        <ul>
            <li><Link to="/"> Inicio  </Link></li>
            <li><Link to="/"> Proyectos </Link></li>
            <li><Link to="/"> Descarga mi CV </Link></li>
            <li><Link to="/info">Informaci&oacute;n de Contacto</Link></li>
        </ul>
        </nav>
    )

}
export default Menu;