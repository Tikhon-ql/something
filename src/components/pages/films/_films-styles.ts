import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Gray, $White, $breakp1200, $breakp576} from '../../../styles/uiKit';

export const FilmsSection = styled.section`
    .clocks__wrapper {
        position: relative;
        padding: 10rem 5rem;

        background-color: ${$Gray};
        z-index: 1;

        overflow: hidden;
        
        z-index: 2;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 50px;

        @media (max-width: ${$breakp1200}) {
            flex-direction: column;
            gap: 30px;
        }
        @media (max-width: ${$breakp576}) {
            padding: 20px;
        }

        
        span {
            font-size: 20px;
        }

        .subheadline { 
            margin-bottom: 10px;

            @media (max-width: ${$breakp576}) {
                font-size: 32px;
            }
        }
    }
    .clocks__info {
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        cursor: pointer;
    
        width: max-content;

        &:hover {
            text-decoration: underline;
        }

        margin: 20px auto;
    }
    .black-btn {
        margin: 3rem auto 0 auto;
    }
`