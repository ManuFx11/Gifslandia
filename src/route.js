//Archivo de rutas de la aplicación
import React from 'react';
import {Route,Switch} from 'wouter';

//Importo los componentes
import Home from './pages/home';
import About from './pages/about';

const Rutas = () => {

    return(
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/info" component={About}/>
         </Switch>
    )
}

export default Rutas;