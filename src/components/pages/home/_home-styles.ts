import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Black, SectionWithImage } from '../../../styles/uiKit';
import { $Gray, $White, $breakp767} from '../../../styles/uiKit';
import img from "../../../styles/images/redd.jpg"

export const MainSection = styled(SectionWithImage)`
    width: 100%;

    &::after {
        background: ${`left/cover url(${img}) ${$Gray} no-repeat`};
    }

    border-bottom: none;
`
export const TextSection = styled.section`
    overflow: hidden;

    background-color: #ddacc7;
    

    h3 {
        margin-top: 7rem;
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
    .links {
        margin-top: 8rem;

        display: flex;
        flex-direction: row;
        gap: 2rem;
        flex-wrap: wrap;

        .link {
            text-decoration: none;
        }
    }
`