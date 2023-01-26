import styled from 'styled-components';
import '../../../styles/uiKit'
import { SectionWithImage } from '../../../styles/uiKit';
import { $Gray, $White, $breakp767} from '../../../styles/uiKit';
import img from "../../../styles/images/mirors.jpg"

export const MainSection = styled(SectionWithImage)`
    height: 100vh;
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
