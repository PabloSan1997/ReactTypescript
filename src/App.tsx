import React from 'react'
import { Header } from './components/Header'
import { RandomFox } from './components/RandomFox'
import "./app.css"
const randomNumber = () => Math.floor(Math.random() * 122) + 1;
const random = () => Math.floor(Math.random() * 122) + 1;
type ImageItems={ id: string, url: string }[];
function App() {
  //const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`;
  const [image, setImage] = React.useState<ImageItems>([
    { id: random().toString(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` },
    { id: random().toString(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` },
    { id: random().toString(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` },
    { id: random().toString(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` }
  ]);

  return (
    <div className="App">
      <Header />
      {image.map((element) =>
        (<RandomFox image={element.url} id={element.id} key={element.id} />)
      )}
    </div>
  )
}

export default App
