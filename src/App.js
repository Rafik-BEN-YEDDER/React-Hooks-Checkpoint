
import './App.css';
import NavBar from './components/NavBar';
import {moviesData} from './data/data'
import { useState } from 'react';
import ListeOfMovies from './components/ListeOfMovies';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [input, setInput] = useState('')
  const [StarSearsh, setStarSearsh] = useState(0);
  const AddMovie=(x)=>{
    return setMovies([...movies,x])
  }
  return (
    <div className="App">
      <NavBar inputSearsh={input} setInputSearsh={setInput} StarSearsh={StarSearsh} setStarSearsh={setStarSearsh} add={AddMovie}/>
      <ListeOfMovies movies={movies} inputSearsh={input} StarSearsh={StarSearsh} />
    </div>
  );
}

export default App;
