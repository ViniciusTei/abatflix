/**
 * This file holds the connection with the API
 */
const API_KEY = process.env.TMDB_KEY;

const BaseUrl = "https://api.themoviedb.org/3";

const basicFecth = async (endpoint) => {
    return (await fetch(`${BaseUrl}${endpoint}`)).json();
}

const MoviesDB = {
    getHomeList: async () => {
        return [
            {
                slug: "originais",
                title: "Originais do Netflix",
                itens: await basicFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "trending",
                title: "Recomendados para voce",
                itens: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "toprated",
                title: "Em alta",
                itens: await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "action",
                title: "Acao",
                itens: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "comedy",
                title: "Comedia",
                itens: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "horror",
                title: "Terror",
                itens: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "romance",
                title: "Romance",
                itens: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: "documentary",
                title: "Documentarios",
                itens: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }, 
            
        ];
    },

    getMovieInfo: async (movieId, movieType) => {
        let info = {};
        if(movieId) {
            switch(movieType){
                case 'movei':
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                 case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

         return info;
    }
}

export default MoviesDB;