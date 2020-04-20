import React, {Component} from 'react';

import imagen from '../assets/images/Manuel-Paez.png'

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
              <div class="ancho-limitado-90">
                <div class="home-title">
                    <div className="imagen-foto">
                    <img src={imagen} title="Manuel Páez" alt="Manuel Páez"/>
                    </div>
           
                <h2>Hola,</h2>
                <p>Bienvenido a mi portfolio 😀</p>
                <p><strong>Soy Manuel,desarrollador de Aplicaciónes Web</strong></p>
                </div>
                <div class="description-home">
                 <h2>Un poco sobre mí..</h2>
                 <p>Desde pequeño siempre he sido un apasionado de los ordenadores, la tecnología y tal y como he ido creciendo enfoque mi vida laboral hacia ello. </p>
                 <p>Alegre, colaborador y con ganas de nunca para de crecer, son los 3 factores que mejor me definen. </p>
                 <p>En mis casí ya 5 años de experiencia laboral, me he podido enfrentar a multiples situaciones del día a día, las cuales siempre he sabido resolver con total normalidad.</p>
                 <p>He trabajado con muchas herramientas pero principalmente con CMS como Wordpress, Woocommerce, Magento. </p>
                 <p>Mi perfil: Front-end, me encanta trabajar con herramientas como React, Express, MongoDB, React Native :)</p>
                </div>
                
              </div>
            </React.Fragment>
        )


    }


}
