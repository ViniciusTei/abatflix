import * as React from 'react'
import {Featured,HorizontalGradient,VerticalGradient,Name,Info,Item,Description,Button,Gender} from './styles'

export const FeaturedMovie: React.FunctionComponent<{item: any}> = ({item}) => {
    let firtDate = new Date(item.first_air_date)
    let genres: any[] = [];

    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    return (
        <Featured backdroppath={item.backdrop_path}>
            <VerticalGradient>
                <HorizontalGradient>
                    <Name>
                        {item.name}
                    </Name>
                    <Info>
                        <Item style={{color: "#46d369"}}>{item.vote_average} pontos</Item>
                        <Item>{firtDate.getFullYear()}</Item>
                        <Item>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</Item>
                    </Info>
                    <Description>{item.overview}</Description>
                    <div style={{marginTop: '1rem'}}>
                        <Button backgroundcolor={'#fff'} color={'#000'}>► Assistir</Button>
                        <Button backgroundcolor={'#333'} color={'#fff'}>+ Minha Lista</Button>
                    </div>
                    <Gender>
                        <strong>Gêneros: </strong>
                        {
                            genres.join(', ')
                        }
                    </Gender>
                </HorizontalGradient>
            </VerticalGradient>
        </Featured>
    )
}
