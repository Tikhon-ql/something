import styled from 'styled-components';
import '../../../styles/uiKit'
import { $breakp767, $White, $Black} from '../../../styles/uiKit';

export const ModalWindow = styled.section`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    z-index: 101;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.75);

    padding: 0;

    .modal__inner {
        display: block;
        position: relative;
        z-index: 3;

        width: 65%;
        min-height: 500px;

        padding: 120px;

        color: ${$White};

        border-radius: 20px;

        background-color: ${$Black};

        @media (max-width: ${$breakp767}) {
            padding: 5rem 3rem;

            width: calc(100% - 40px);
        }

        h2 {
            margin-bottom: 20px;
        }
        p {
            padding-bottom: 10px;
        }
    }

    &.mobileMenu {
        .modal {
            &__inner {
                border-radius: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    &.error {
        .modal {
            &__inner {
                padding: 6rem 0;
                
                width: 100%;
                height: auto;

                align-self: flex-start;

                border-radius: 0;
            }
            &__content > p {
                text-align: center;
                font-size: 2.5rem;
            }
        }
    }
    
    .modal__close-btn { 
        display: flex;
        align-items: center;
        justify-content: center;

        transform: scale(1.35);

        width: 35px;
        height: 35px;

        position: absolute;
        top: 2rem;
        right: 2rem;
    }
`
