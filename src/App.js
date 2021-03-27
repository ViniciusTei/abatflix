import React, { useEffect, useState } from 'react';
import './App.css';
import MoviesDB from './MoviesDB';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

/**
 * TO-DO:
 * 1. Buscar entender o uso das funcoes useEffect e useState do react
 * 2. Mudar codigo para Typescript **IMPORTANTE!!!**
 * 3. Adicinar Sytled-components 
 */
function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    //Pegando toda a lista dos filmes
    const loadAll = async () => {
      let list = await MoviesDB.getHomeList()
      setMovieList(list);

      //pega o filme destaque
      let originals = list.filter(item  => item.slug === 'originais')
      let rand = Math.floor(Math.random() * originals[0].itens.results.length)
      let chosen = originals[0].itens.results[rand]
      let info = await MoviesDB.getMovieInfo(chosen.id, 'tv')
      setFeatureData(info)

    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader}></Header>
      {featureData && <FeaturedMovie item={featureData}/>}
      <section className="lista">
        {
          //importante lembrar de passar a key quando criar loops
          movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} itens={item.itens}></MovieRow>
          ))
        }
      </section>

      <footer>
        Feito com <span role="img" aria-label="coracao">❤</span> por VINICIUSTI
      </footer>
    </div>
  );
}

export default App;
