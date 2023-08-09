import React, { useEffect, useState } from 'react';

import './App.css';
import { landingPageDTO } from './peliculas/pelicula.model';
//import PeliculaIndividual from './peliculas/PeliculaIndividual';
import ListadoPelicula from './peliculas/ListadoPelicula';
// import Button from './utils/Button';
import Menu from './utils/Menu';
import { Router } from 'react-router-dom';

function App() {

  const[peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(()=> {
      setPeliculas({enCartelera: [
        {
          id: 1, 
          titulo: 'Oppenheimer',
          poster: 'https://www.lahiguera.net/cinemania/pelicula/10176/oppenheimer-cartel-11159.jpg'
        },
        {
          id: 2, 
          titulo: 'Barbie',
          poster: 'https://www.lahiguera.net/cinemania/pelicula/10297/barbie-cartel-11222.jpg'
        },
        {
          id: 4, 
          titulo: 'Saw X',
          poster: 'https://www.lahiguera.net/cinemania/pelicula/10830/saw_x-cartel-11283.jpg'
        }
      ], proximosEstrenos: [
        {
          id: 3, 
          titulo: 'The Marvels',
          poster: 'https://www.lahiguera.net/cinemania/pelicula/10455/the_marvels-cartel-11259.jpg'
        }
      ]})
    }, 1000);

    return () => clearTimeout(timerId);
  }, [])

  const Home = () : Element => <h1>Home</h1>

  const Generos = () : Element => <h1>Genero Page</h1>
  

  return (
    <>
      <Menu />
      <div className="container">        

        <h3>En Cartelera</h3>
        <ListadoPelicula peliculas={peliculas.enCartelera} />
        <h3>Próximos Estrenos</h3>
        <ListadoPelicula peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );
}

export default App;
