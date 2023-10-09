import styled from 'styled-components'
import backgroundImg from '../../assets/home-background.svg'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 1248px;
    overflow: hidden;

    padding: 2rem 5rem;
    margin: 0 auto;
    background: url(${backgroundImg}) no-repeat 500px 100px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
    }
`;

export const Navbar = styled.nav`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    display: flex;
    align-items: center;

    gap: .5rem;
`;

export const Content = styled.div`
    max-width: 400px;
    height: 100%;
    h1 {
        margin-top: 5rem;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.TITLE_COLOR};
    }

    p {
        font-size: 1.5rem;
        margin-top: 1.5rem;
        color: ${({ theme }) => theme.COLORS.TITLE_COLOR};
    }

    a {
        text-decoration: none;
    }

    button {
        background: ${({ theme }) => theme.COLORS.PRIMARY};
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        padding: 1.5rem;
        margin-top: 1.5rem;
        cursor: pointer;


        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 19rem;
    }
`;
