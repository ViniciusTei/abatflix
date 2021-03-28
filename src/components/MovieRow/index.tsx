import * as React from 'react';
import {NavigateBefore, NavigateNext} from '@styled-icons/material'
import {Button,ListArea,ListImage,ListItem,Row,RowTitle} from './styles'

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
        <Row>
            <RowTitle>{title}</RowTitle>

            <Button style={{left: 0}} onClick={handleLeft}>
                <NavigateBefore style={{color: '#fff'}} size="50" title="Navigate Back"></NavigateBefore>
            </Button>

            <Button style={{right: 0}} onClick={handleRight}>
                <NavigateNext  style={{color: '#fff'}} size="50" title="Navigate Foward"></NavigateNext>
            </Button>

            <ListArea>

                <div
                    style={{
                        marginLeft :scrollX,
                        width: itens.results.length * 150,
                        transition: 'all ease 0.5s'
                    }}
                >
                {
                    itens.results.length > 0 && itens.results.map((item:any, key:number) => (
                        <ListItem key={key}>
                            <ListImage src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                        </ListItem>
                    ))
                }
                </div>
                
            </ListArea>

            
        </Row>
    )
}