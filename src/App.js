import React,{useState} from 'react';
import './App.css';

//Components
import Buscador from './components/buscador';
import ListGif from './components/list-gifs';

function App(){

  //Declaro los estados que enviare por props a ListGif, no se declara alli ya que Buscador tambien los usara
   const [gifs, setGifs] = useState([]);
   const [busqueda, setBusqueda] = useState("panda");

   function grabarDato(e){
      setBusqueda(e.target.value);
   }
   
  return (
    <div className="App">
      <section className="App-header">
        <ListGif busqueda={busqueda} gifs={gifs} setGifs={setGifs}/>
        <Buscador grabarDato={grabarDato}/>
      </section>
       
    </div>
  );
}

export default App;
