import styled from 'styled-components';

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: black;

    color: #dddddd;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;

    width: max-content;
    padding: 2rem 5rem;
    margin: 3rem auto 0 auto;
    text-align: center;

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

    min-height: ${props => props.minHeight || "auto"};

    padding: 150px 20px 50px 20px;

    margin: 0 auto;
`