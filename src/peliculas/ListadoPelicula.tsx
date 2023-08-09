import PeliculaIndividual from './PeliculaIndividual';
import {pelicula} from './pelicula.model';
import css from './ListadoPelicula.module.css';
// import Cargando from '../utils/Cargando';
import ListadoGenerico from '../utils/ListadoGenerico';

export default function ListadoPelicula(props: listadoPeliculaProps){

  
    return(
      <ListadoGenerico listado={props.peliculas}>
        <div className={css.div}>
          {props.peliculas?.map(pelicula => <PeliculaIndividual 
              pelicula={pelicula} 
              key={pelicula.id} />)}
        </div>
      </ListadoGenerico>
     )
  

 
}

interface listadoPeliculaProps{
  peliculas?: Array<pelicula>
}