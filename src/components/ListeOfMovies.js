import React from 'react';
import MovieCard from './MovieCard';


function ListeOfMovies({movies,inputSearsh,StarSearsh}) {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {movies.filter(el=> el.title.toLowerCase().includes(inputSearsh.toLowerCase()) && el.rate >= StarSearsh ).map(el=><MovieCard movie={el}/> ) }
        </div>
    )
}

export default ListeOfMovies;
