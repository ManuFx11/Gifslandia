import React,{useState,useEffect} from 'react';
import Gif from './gif';
import axios from 'axios';

function ListGifs(props){
  //Se ejecuta cada vez que se renderiza nuestro componente o cambia el estado, recibe un segundo parametro denominado dependencias
  useEffect(() => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=THu9vMb3Ry5XxLjFC5LMU3PUMWsXv5gL&q=${props.busqueda}&limit=5&offset=0&rating=G&lang=en`;
    axios.get(apiURL)
    .then(response => {
      const data = response.data.data;
      const url_gifs = data.map(image => { 
        const {images, title, id} = image
        const {url} = images.downsized_medium
        return {title,id,url}
      })
      props.setGifs(url_gifs);
    }).catch(error => {
      console.log(error);
    })
  },[props.busqueda])  //Se ejecutar setEffect cuando cambie esta variable

    return props.gifs.map(gif => {
        return <Gif key={gif.id} gif={gif}/>     
     })
}
export default ListGifs;