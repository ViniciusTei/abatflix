import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    padding: 5rem;

    @media (max-width: 600px) {
        padding: 2rem;
    }
`

export const Header = styled.header`
    widht: 100vh
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    aling-items: center
`

export const Card = styled.div`
    width: 500px;
    height: 400px;
    margin: auto auto;
    padding-top: 8rem;

    @media (max-width: 600px) {
        width: 90%;
    }
`

export const Titulo = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 3.5rem;
    text-align: center;
`
export const Label = styled.label`
    position: absolute;
    color: #8c8c8c;
    top: 15%;
    font-size: 0.675rem;
    left:10px;
`

export const Input = styled.input`
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 16px 20px 0;
    background: #333;
    margin: 0 auto;
    width: 100%;
       
`

export const InputElement = styled.div`
    position: relative;
    margin-bottom: 15px;

    ${Input}&:focus ${Label} {
        font-size: 2rem;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const LogOutButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0 1em 0;
    font-size: .6rem;
    text-transform: uppercase;
    cursor: pointer;
    background: #fff;
    color: #000;
    border: 1px solid #fff;
    font-weight: 700;
    width: 30%;
    &:hover {
        background: #e5e5e5;
    }
`

export const EditButton = styled.button`
    padding: 16px 2em;
    width: 50%;
    min-width: 98px;
    min-height: 37px;
    line-height: 1em;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    background: #e50914;
    display: inline-block;
    color: #fff;
    border: none;
    margin-top: 1rem;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
        background: #f49ca1;
    }
`