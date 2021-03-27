import React, {useEffect} from 'react';
import './styles.css';

function MovieRow({title, itens}) {
    return (
        <div className="movierow">
            <h2>{title}</h2>
            <div className="movierow--listarea">

                <div className="movierow--list">
                {
                    itens.results.length > 0 && itens.results.map((item, key) => (
                        <div key={key} className="movierow--item">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))
                }
                </div>
                
            </div>
        </div>
    )
}

export default MovieRow