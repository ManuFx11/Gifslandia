import React from 'react';
import '../assets/estilos.css';
import logo from '../assets/images/logo.png';

//Componentes
import Menu from '../components/menu';

const Header = () => {

    return(
       <header>
           <div className="contenido-cabecera">
               <div id="logo">
                   <img src={logo} title="#" alt="#"/>
               </div>
                <Menu/>
           </div>
       </header>
    )
}
export default Header;