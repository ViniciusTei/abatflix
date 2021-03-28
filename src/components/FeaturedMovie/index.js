import React from 'react'
import './styles.css'

export default function FeaturedMovie({item}) {
    console.log(item)
    let firtDate = new Date(item.first_air_date)
    let genres = [];

    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--info-item featured--info--green">{item.vote_average} pontos</div>
                        <div className="featured--info-item">{firtDate.getFullYear()}</div>
                        <div className="featured--info-item">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <button className="featured--button--light">► Assistir</button>
                        <button className="featured--button--dark">+ Minha Lista</button>
                    </div>
                    <div className="featured--gender">
                        <strong>Gêneros: </strong>
                        {
                            genres.join(', ')
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
