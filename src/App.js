import React, { useEffect, useState } from 'react';
import './App.css';
import MoviesDB from './MoviesDB';

/**
 * TO-DO:
 * 1. Buscar entender o uso das funcoes useEffect e useState do react
 * @returns 
 */
function App() {

  const [movieList, setMovieList] = useState();

  useEffect(() => {
    //Pegando toda a lista dos filmes
    const loadAll = async () => {
      let list = await MoviesDB.getHomeList()
      setMovieList(list);
    }

    loadAll()
  }, []);
  
  return (
    <div className="page">
      
    </div>
  );
}

export default App;
