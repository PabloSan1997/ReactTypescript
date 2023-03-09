import React from 'react'
type LazyProps = {
  image: string,
};
type ImageType = React.ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyProps & ImageType;


export function RandomFox({ image, ...inProps}: Props): JSX.Element {
  const node = React.useRef<HTMLImageElement>(null);
  const [src, setSrc] = React.useState<string>(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  React.useEffect(
    () => {
      //nuevo observador
      const observer = new IntersectionObserver(entries => {
        entries.forEach(
          entry => {
            if (entry.isIntersecting) {
              setSrc(image);
            }
          }
        );
      });
      //observando
      if (!!node.current) {
        observer.observe(node.current);
      }
      //desconectado
      return () => {
        observer.disconnect();
      };
    }
    , [image]);

  return (
    <img ref={node} src={src} style={estilos()} {...inProps}/>
  )
}

const estilos = (): object => {
  interface Estilos {
    width: string,
    borderRadius: string,
    marginBottom: string,
    background:string
    
  }
  const estilo: Estilos = {
    width: "320px",
    borderRadius: "10px",
    marginBottom: "10px",
    background:"gray"
  }
  return estilo;
}