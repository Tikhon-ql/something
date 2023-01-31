import styled from 'styled-components';
import '../../../styles/uiKit'
import { SectionWithImage } from '../../../styles/uiKit';
import { $Gray, $breakp576, $breakp991, $breakp767} from '../../../styles/uiKit';
import img from "../../../styles/images/login/blue.jpg"

export const RegistrationSection = styled(SectionWithImage)`
    border-bottom: 0;

    &::after {
        background: ${`center/cover url(${img}) ${$Gray} no-repeat`};
        opacity: 0.9;
        filter: none;
    }

    h1 {
        margin-bottom: 4rem;
        text-align: center;
    }

    .register__buttons {
        margin-top: 5rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        width: 100%;

        .black-btn {
            min-width: 45rem;
        }
    }
    .register__inner {
        background: #00000059;
        padding: 10rem 15rem;
        border-radius: 2rem;

        @media (max-width: ${$breakp991}) {
            padding: 10rem;
        }
        @media (max-width: ${$breakp767}) {
            padding: 0;
            background: none;
        }
    }
    .register__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .register__form {
        width: 100%;
        margin-top: 5rem;
    
        display: flex;
        flex-direction: column;
        align-items: center;
    
        gap: 2rem;
    }
`
