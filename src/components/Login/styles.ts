import styled from 'styled-components'

export const Container = styled.div`
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg");
    height: 100vh;
`
export const Header = styled.header`
    width: 100vh;
    height: 120px;
    display: flex;
    align-items: center;
    marging-left: 3rem;
    padding-left: 50px;
`
export const Card = styled.div`
    min-height: 600px;
    max-width: 400px;
    background-color: rgba(0,0,0,.75);
    padding: 60px 68px 40px;
    margin: auto;
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

export const LoginButton = styled.button`
padding: 16px 2em;
width: 100%;
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
`
export const MiniLabel = styled.label`
    font-size: 0.875rem;
    color: #737373;
    padding: 0.6rem;
    cursor: pointer;
`