import styled from 'styled-components';
import '../../../styles/uiKit'
import { SectionWithImage } from '../../../styles/uiKit';
import { $Gray} from '../../../styles/uiKit';
import img from "../../../styles/images/login/svet.jpg"

export const RegistrationSection = styled(SectionWithImage)`
    border-bottom: 0;

    &::after {
        background: ${`center/cover url(${img}) ${$Gray} no-repeat`};
        opacity: 0.8;
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
