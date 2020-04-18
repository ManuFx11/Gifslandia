import React from 'react';

const Gif = (props) => {

  return(
    <React.Fragment>
    <a href={props.gif.id}>
    <img src={props.gif.url} title={props.gif.title} alt={props.gif.title}/>
    <small>{props.gif.title}</small>
    </a>
    </React.Fragment>
    )

}
export default Gif;