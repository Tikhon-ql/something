import styled from 'styled-components';

export const $breakp450 = "450px";
export const $breakp576 = "576px";
export const $breakp767 = "767px";
export const $breakp991 = "991px";
export const $breakp1200 = "1200px";
export const $breakp1400 = "1400px";

export const $Gray = "#eeecec";
export const $DeepGray = "#ececec";
export const $BorderColor = "#666666";
export const $Black = "#000000";
export const $TransparentBlack = "#00000059";
export const $White = "#ffffff";
export const $TransparentWhite = "#ffffffeb"

export const $transition = "all .2s ease-in";
export const $headerHeight = "100px";

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.white?$White:$Black};

    color: ${props => props.white?$Black:"#dddddd"};
    font-size: 15px;
    line-height: 25px;
    font-weight: 600;
    text-align: center;

    width: max-content;
    padding: 2rem 4rem;

    border-radius: 4rem;

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

    border-radius: 4rem;
    padding: 0 2rem;

    font-size: 2rem;

    @media (max-width: 576px) {
        width: 100% !important;
        min-width: unset !important;
        max-width: unset !important;
    }

    &:focus {
        transform: scale(1.05);
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

export const PageHeadline = styled.h1`
    font-weight: 700;
    font-size: 50px;
    line-height: 70px;

    @media (max-width: ${$breakp450}) {
        font-size: 35px;
        line-height: 40px;
    }
`