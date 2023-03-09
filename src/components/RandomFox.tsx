import React from 'react'
type Props={
  image:string,
  id:string
};

export function RandomFox({image, id}:Props):JSX.Element {  
  
  interface Estilos{
    width:string,
    borderRadius:string,
    marginBottom:string
  }
  const estilos:Estilos={
    width:"320px",
    borderRadius:"10px",
    marginBottom:"10px"
  }
  return (
  <img src={image} alt="zorros" className="foto"  style={estilos}/>
  )
}

