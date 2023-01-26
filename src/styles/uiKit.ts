import styled from 'styled-components';
import {$headerHeight, $Gray} from './variables';

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: black;

    color: #dddddd;
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;

    width: max-content;
    padding: 2rem 4rem;

    transition: all 0.3s ease;

    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 576px) {
        padding: 2rem;

        width: 100% !important;
        min-width: unset !important;
        max-width: unset !important;
    }
`


export const Input = styled.input`
    border: 2px solid black;
    height: 5rem;
    width: 30rem;

    font-size: 2rem;

    @media (max-width: 576px) {
        width: 100% !important;
        min-width: unset !important;
        max-width: unset !important;
    }

    &:focus {
        border: 2px solid #79CAE8;
        outline: none;
    }
`

export const Container = styled.div`
    max-width: 1080px;
    width: 100%;

    min-height: ${props => props.minHeight || "auto"};

    padding: 0 20px 0 20px;

    margin: 0 auto;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justufy};
    align-items: ${props => props.align};
`

export const SectionWithImage = styled.section`
    z-index: 1;
    height: calc(100vh - ${$headerHeight});
    border-bottom: 2px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: -${$headerHeight};
        left: 0;

        width: 100%;
        height: calc(100% + ${$headerHeight});

        background: ${props => `left/cover url(${props.img}) ${$Gray} no-repeat`};
        opacity: 0.7;
        filter: blur(2px);

        z-index: -1;
    }
`