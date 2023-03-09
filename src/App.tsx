import React from 'react'
import type {MouseEventHandler} from 'react'

import { Header } from './components/Header'
import { RandomFox } from './components/RandomFox'
import "./app.css"
const randomNumber = () => Math.floor(Math.random() * 122) + 1;
const random = () => Math.floor(Math.random() * 122) + 1;
type ImageItems={ id: string, url: string }[];
function App() {
  //const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`;
  const [image, setImage] = React.useState<ImageItems>([
    
  ]);

  const addNewFox:MouseEventHandler = (e):void=>{
    e.preventDefault();
    const newImageItems =  { id: random().toString(), url: `https://randomfox.ca/images/${randomNumber()}.jpg`};
    setImage([
      ...image, newImageItems
    ]);
  }
  return (
    <div className="App">
      <Header />
      <button className="boton addfox" onClick={(e)=>addNewFox(e)}>Agragar zorro</button>
      {image.map((element) =>
        (<RandomFox 
          image={element.url} 
          className="foto" 
          id={element.id} 
          key={element.id} 
          onClick={()=>console.log("hola a todos")}
          alt="zorros"
          />)
      )}
    </div>
  )
}

export default App
