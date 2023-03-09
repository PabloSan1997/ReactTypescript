import React from 'react'
const randomNumber = () => Math.floor(Math.random() * 122) + 1;
export function RandomFox():JSX.Element {
  
  const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`;
  interface Estilos{
    width:string,
    borderRadius:string
  }
  const estilos:Estilos={
    width:"320px",
    borderRadius:"10px"
  }
  return (
  <img src={image} alt="zorros" className="foto"  style={estilos}/>
  )
}

