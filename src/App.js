import React, { useEffect, useState } from 'react';
import './App.css';
import MoviesDB from './MoviesDB';
import MovieRow from './components/MovieRow'

/**
 * TO-DO:
 * 1. Buscar entender o uso das funcoes useEffect e useState do react
 *  
 */
function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    //Pegando toda a lista dos filmes
    const loadAll = async () => {
      let list = await MoviesDB.getHomeList()
      setMovieList(list);
    }

    loadAll();
  }, [])

  return (
    <div className="page">
      <section className="lista">
        {
          movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} itens={item.itens}></MovieRow>
          ))
        }
      </section>
    </div>
  );
}

export default App;
