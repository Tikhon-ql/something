import styled from 'styled-components';
import '../../../styles/uiKit'
import { $White, SectionWithImage } from '../../../styles/uiKit';
import { $Gray, $breakp576, $transition} from '../../../styles/uiKit';
import img from "../../../styles/images/login/wao.jpg"

export const LoginSection = styled(SectionWithImage)`
    border-bottom: 0;

    &::after {
        background: ${`center/cover url(${img}) ${$Gray} no-repeat`};
        opacity: 0.9;
        filter: none;
    }

    .login__buttons {
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
    .login__inner {
        background: #00000059;
        padding: 10rem;
        border-radius: 2rem;

        transition: ${$transition};

        &:hover {
            background: #00000059;
        }

        @media (max-width: ${$breakp576}) {
            padding: 0;
            background: none;
        }
    }
    .login__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            color: ${$White};
            margin-bottom: 4rem;
            text-align: center;
        }
    }
    .login__form {
        margin-top: 5rem;
    
        display: flex;
        flex-direction: column;
        align-items: center;
    
        gap: 2rem;
    }

    border-bottom: 0;

    &::after {
        background: ${`left/cover url(${img}) ${$Gray} no-repeat`};
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
