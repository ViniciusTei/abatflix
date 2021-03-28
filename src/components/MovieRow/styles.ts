import styled from 'styled-components'

export const Row = styled.div`
    margin-bottom: 2rem;
`

export const RowTitle = styled.h2`
    margin: 0 0 0 2rem;
`

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 2rem;

    &:hover Button {
        opacity: 1;
    }
`

export const ListItem = styled.div`
    cursor: pointer;
    display: inline-block;
    width: 150px;
`

export const ListImage = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
        transform: scale(1);
    }

    
`

export const Button = styled.button`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease .5s;

    @media (max-width: 760px) {
        opacity: 1;
    }

    &:hover {
        opacity: 1;
    }
`