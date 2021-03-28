import styled from 'styled-components';

interface FeaturedProps {
    backdroppath: string;
}

interface ButtonProps {
    backgroundcolor: string;
    color: string;
}

export const Featured = styled.section<FeaturedProps>`
    height: 100vh;
    background-size: 'cover';
    backckgroun-position: 'center';
    background-image: url(https://image.tmdb.org/t/p/original${(props) => props.backdroppath ? props.backdroppath : ''})

    @media(max-width: 760px) {
        heigth: 90vh;
    }
`

export const VerticalGradient = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const HorizontalGradient = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    padding-bottom: 250px;
`

export const Name = styled.section`
    font-size: 3.75rem;
    font-weight: bold;
    max-width: 60%;

    @media(max-width: 760px) {
        font-size:2rem;
    }
`

export const Info = styled.section`
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;

    @media(max-width: 760px) {
        font-size:1rem;
    }
`

export const Item = styled.div`
    display: inline-block;
    margin-right: 1rem;
`

export const Description = styled.section`
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;

    @media(max-width: 760px) {
        font-size: 0.875rem; 
        max-width: 100%;
        margin-right: 1.875rem;
    }
`


export const Button = styled.section<ButtonProps>`
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0.8rem 1.3rem;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;

    &:hover {
        opacity: 0.7;
    }

    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.color};

    @media(max-width: 760px) {
        font-size: 0.675rem;
    }
`

export const Gender = styled.div`
    margin-top: 1rem;
    font-size: 1.125rem;
    color: #999;

    @media(max-width: 760px) {
        font-size: 0.875rem; 
    }
`