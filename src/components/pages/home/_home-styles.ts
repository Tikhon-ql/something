import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Black, SectionWithImage } from '../../../styles/uiKit';
import { $Gray, $White, $breakp767} from '../../../styles/uiKit';
import img from "../../../styles/images/mirors.jpg"

export const MainSection = styled(SectionWithImage)`
    width: 100%;

    border-bottom: 0;

    &::after {
        background: ${`left/cover url(${img}) ${$Gray} no-repeat`};
        filter: none;

        @media (max-width: ${$breakp767}) {
            background-position: center;
            opacity: 0.2;
        }
    }

    &::before {
        content: "";
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: linear-gradient(to bottom, transparent 0%, transparent 60%, ${$White} 100%);
    }

    border-bottom: none;
`
export const TextSection = styled.section`
    overflow: hidden;

    h3 {
        margin-top: 7rem;
    }

    .q-image {
        width: 80px;
        height: 250px;
        object-fit: cover;

        position: absolute;

        &:nth-of-type(1) {
            top: -120px;
            right: -80px;
            transform: rotate(347deg);
        }
        &:nth-of-type(2) {
            top: 320px;
            right: -280px;
            transform: rotate(25deg);
        }
        &:nth-of-type(3) {
            right: -110px;
            transform: rotate(331deg);
            bottom: -700px;
        }
    }

    .list {
        margin-top: 3rem;

        padding-left: 1.5rem;

        li {
            line-height: 4rem;

            span {
                font-family: "Montserrat-Medium";
            }
        }
    }

    .image {
        position: relative;

        // &::before {
        //     content: "";
        //     position: absolute;

        //     top: 0;
        //     left: 0;

        //     width: 100%;
        //     height: 100%;

        //     background: linear-gradient(85deg, transparent 0%, transparent 60%, white 100%);
        //     z-index: 2;
        // }

        &-wrapper {
            height: 44rem;

            &::after {
                content: "";
                position: absolute;
    
                top: 0;
                left: 0;
    
                width: 100%;
                height: 100%;
    
                z-index: 2;
    
                background: linear-gradient(243deg,transparent 0%,transparent 60%,white 100%);
            }

            img {
                object-fit: cover;
    
                width: 100%;
                height: 100%;
            }
        }
    }
`