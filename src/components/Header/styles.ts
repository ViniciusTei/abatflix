import styled from 'styled-components';

interface HeaderProps {
    black: boolean;
}

export const HeaderWrapper = styled.header<HeaderProps>`
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background: transparent;
    transition: all ease 0.3s;

    background-color: ${(props) => props.black ? '#141414' : ''};
`

export const Logo = styled.div`
    cursor: pointer;
    height: 30px;
`

export const UserImg = styled.img`
    cursor: pointer;
    height: 35px;
`