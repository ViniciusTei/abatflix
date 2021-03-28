import * as React from 'react';
import './styles.css';
import {NavigateBefore, NavigateNext} from '@styled-icons/material'

export const MovieRow: React.FunctionComponent<{title:string, itens:any}> = ({title, itens}) => {

    const [scrollX, setScrollX]= React.useState(0);

    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = itens.results.length * 150;
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movierow">
            <h2>{title}</h2>

            <div className="movierow--buttons left" onClick={handleLeft}>
                <NavigateBefore className="NavigateBefore" size="50" title="Navigate Back"></NavigateBefore>
            </div>

            <div className="movierow--buttons right" onClick={handleRight}>
                <NavigateNext className="NavigateNext" size="50" title="Navigate Foward"></NavigateNext>
            </div>

            <div className="movierow--listarea">

                <div className="movierow--list"
                    style={{
                        marginLeft :scrollX,
                        width: itens.results.length * 150,
                        transition: 'all ease 0.5s'
                    }}
                >
                {
                    itens.results.length > 0 && itens.results.map((item:any, key:number) => (
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