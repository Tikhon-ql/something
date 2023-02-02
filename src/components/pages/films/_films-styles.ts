import styled from 'styled-components';
import '../../../styles/uiKit'
import { 
    $Gray, 
    $White, 
    $TransparentWhite, 
    $breakp767, 
    $breakp576, 
    $Black, 
    $TransparentBlack,
    SectionWithImage,
    Button
} from '../../../styles/uiKit';

import Plus from "../../../styles/images/plus.png"
import Minus from "../../../styles/images/minus.png"
import img from "../../../styles/images/cold.jpg"
import img2 from "../../../styles/images/kraska.jpg"

export const AddFilm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    background: ${$TransparentBlack};
    padding: 4rem 2rem;

    .wrapper {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 3rem;

        @media (max-width: ${$breakp767}) {
            flex-direction: column;
        }
    }
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 1rem;

`

export const Background = styled(SectionWithImage)`
    border-bottom: none;

    height: auto;

    &::after {
        background: ${`center/cover url(${img}) ${$Gray} no-repeat`};
        opacity: 0.85;
        filter: blur(1px);

        position: fixed;
    }

    &.my-films {
        &::after {
            background: ${`center/cover url(${img2}) ${$Gray} no-repeat`};
            opacity: 0.8;
    
            position: fixed;
        }
    }
`
export const HeadSection = styled.section`
    padding-bottom: 0;
    margin-bottom: 8rem;
    text-align: center;

    .allFilmsCount {
        position: absolute;
        bottom: 1rem;
        right: 0;

        color: ${$White};
    }

    h1 {
        text-align: center;
        color: ${$White};

        margin: 3rem 0;
    }

    display: flex;
    flex-direction: column;

    align-items: center;

    .search-input {
        margin: 3rem 0 0;

        width: max-content;
    }
`

export const FilmsSection = styled.section`
    padding-top: 2rem;
    
    .films__list {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 5rem;
    }
    .films__btn {
        margin: 5rem auto 0 auto;
    }
`

export const FilmItem = styled.div`
    border-radius: 1rem;
    overflow: hidden;

    width: 100%;
    transition: all .15s;


    @media (min-width: ${$breakp767}) {
        &:hover {
            transform: scale(1.01);
        }
    }
    
    &.open {
        .icon {
            background: center/cover url(${Minus});
        }

        .film-item__submenu {
            display: block;
        }
    }
`

export const FilmItemHead = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;

    padding: 3rem 3rem 8rem 3rem;

    background-color: ${$TransparentWhite};

    @media (max-width: ${$breakp767}) {
        flex-direction: column;
        align-items: start;
        gap: 2rem;
    }

    &-name {
        font-size: 2rem;
        line-height: 3rem;

        font-weight: 600;
    }

    .icon {
        content: "";
        position: absolute;

        bottom: 20px;
        right: 30px;

        width: 40px;
        height: 40px;

        transition: all .2s;

        background: center/cover url(${Plus});

        &:hover {
            transform: scale(1.1);
        }
    }
` 

export const AddFilmBtn = styled(Button)`
    position: absolute;
    bottom: 2rem;

    font-size: 15px;
    line-height: 1;

    padding: 1.5rem 2rem;

    @media (max-width: ${$breakp576}) {
        position: static;
    }
`

export const FilmSubmenu = styled.div`
    display: none;

    transition: all .4s;

    background: ${$Black};
    padding: 3rem 4rem;

    @media (max-width: ${$breakp576}) {
        padding: 3rem 2rem;
    }
`