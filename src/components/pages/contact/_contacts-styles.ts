import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Gray, $White, $breakp576, $breakp767, $Black} from '../../../styles/uiKit';
import { SectionWithImage } from '../../../styles/uiKit';

import Phones from "../../../styles/images/contacts/phones.jpg"

export const MainSection = styled(SectionWithImage)`
    &::after {
        background: ${`center/cover url(${Phones}) ${$Gray} no-repeat`};

        opacity: 0.7;
        filter: none;
    }
    @media (max-width: ${$breakp767}) {
        height: auto;
    }

    text-align: center;

    .headline {
        margin: 0 0 10rem;

        @media (max-width: ${$breakp767}) {
            margin: 0 0 5rem;
        }
    }

    .wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;

        @media (max-width: ${$breakp767}) {
            grid-template-columns: 1fr;
        }
    }

`

export const ContactSection = styled.section`
    padding: 8rem 6rem;

    position: relative;
    overflow: hidden;
    z-index: 2;

    border-radius: 1rem;

    @media (max-width: ${$breakp767}) {
        padding: 5rem 3rem;
    }

    h2, p, a {
        color: ${$White}
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: #000000;
        opacity: .6;
        z-index: -1;
    }

    .social-links {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        a {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            text-decoration: none;
        }
    }
`