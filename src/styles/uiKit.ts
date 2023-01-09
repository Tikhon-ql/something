import styled from 'styled-components';

export const Button = styled.div`
    display: block;

    background-color: black;

    color: white;
    font-size: 32px;
    line-height: 50px;
    font-weight: 600;
    width: max-content;
    padding: 2rem 5rem;
    margin: 3rem auto 0 auto;

    text-align: center;

    max-width: 100%;

    transition: all 0.3s ease;

    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 576px) {
        padding: 2rem;

        font-size: 20px;
        line-height: 30px;

        width: 100%;
    }
`

export const Container = styled.div`
    max-width: 1200px;
    padding: 150px 15px;

    margin: 0 auto;
`