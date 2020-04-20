import React from 'react';
import './App.css';
import Header from './components/header';

//Rutas
import Route from './route';

function App(){

  return (

    <div className="App">
      <Header/>
      <section className="App-header">
       <Route/>
      </section> 
    </div>
  );
}

export default App;
