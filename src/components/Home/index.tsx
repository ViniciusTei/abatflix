import React from 'react';

import MoviesDB from '../../MoviesDB';

import { FeaturedMovie } from '../FeaturedMovie';
import { Header } from '../Header';
import { MovieRow } from '../MovieRow';

import { Footer,Loading,Lista } from './styles';

const Home: React.FC = () => {
    const [movieList, setMovieList] = React.useState<any[]>([]);
    const [featureData, setFeatureData] = React.useState({});
    const [blackHeader, setBlackHeader] = React.useState(false);
    
    React.useEffect(() => {
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

    React.useEffect(() => {
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
        <>
            <Header black={blackHeader}></Header>
            {featureData && <FeaturedMovie item={featureData}/>}
            <Lista>
                {
                //importante lembrar de passar a key quando criar loops
                movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} itens={item.itens}></MovieRow>
                ))
                }
            </Lista>

            <Footer>
                Feito com <span role="img" aria-label="coracao">❤</span> por VINICIUSTI
            </Footer>

            {movieList.length <= 0 &&
            <Loading>
                <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
            </Loading>
            }
        </>
  );
}

export default Home;