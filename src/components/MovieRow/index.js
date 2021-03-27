import React, {useEffect} from 'react';
import './styles.css';

function MovieRow({title, itens}) {
    return (
        <div>
            <h2>{title}</h2>
            <div className="movierow--listarea">
                {
                    itens.results.length > 0 && itens.results.map((item, key) => (
                        <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieRow