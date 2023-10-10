import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    color: ${({ theme }) => theme.COLORS.TITLE_COLOR};
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    max-width: 1248px;

    padding: 2rem 5rem;
    margin: 0 auto;

    #map { 
        margin-top: 2rem;
        height: 220px; 
    }
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

export const Content = styled.form`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
`;

export const FormContainer = styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    min-width: 470px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    h1 {
        margin-top: 2rem;
        width: 250px;
    }

    h2 {
        margin: 3rem 0 2.5rem 0;
    }

    label {
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
        margin-bottom: .5rem;
    }

    input[type='text'] {
        width: 100%;
        padding: 1rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        outline: none;
        border-radius: 6px;
        margin-bottom: 1rem
    }

    ul {
        padding: 2rem;
        display: flex;
        list-style: none;
        flex-wrap: wrap;

        gap: .5rem;
        justify-content: space-between;
    }

    li {
        background-color: red;
        height: 9rem;
        width: 9rem;
    }

    button {
        justify-content: end;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        padding: 1rem;
        border: none;

        cursor: pointer;
        font-size: 1rem;
        width: 40%;
        border-radius: 6px;
        transform: all .3s;

        &:hover {
            background: ${({ theme }) => theme.COLORS.SECONDARY}
        }
    }
`;

export const FormSpace = styled.div`
    display: flex;
    width: 100%; 
    gap: 1rem;

    .adress{
        flex: 1;
    }
    .number {
        width: 30%;
    }
`;

export const FormField =  styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;

    div {
        width: 100%;
        
        select {
            width: 100%;
            height: 3rem;
            border-radius: 6px;
            color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
            background: ${({ theme }) => theme.COLORS.GRAY_300};
            border: none;
        }
    }
`;