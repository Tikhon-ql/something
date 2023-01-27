import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Gray, $White, $breakp1200, $breakp576, $breakp767, $Black} from '../../../styles/uiKit';

export const AccountsSection = styled.section`
    margin: 10rem 0;
    padding: 8rem 6rem;

    background-color: ${$Gray};

    @media (max-width: ${$breakp767}) {
        padding: 5rem 3rem;
    }

    .account {
        &__main-info {
            padding: 2rem 0;
            border-bottom: 2px solid ${$Black};

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            gap: 3rem;

            @media (max-width: ${$breakp576}) {
                flex-direction: column;
            }
        }

        &-img {
            width: 25rem;
            height: 25rem;

            display: flex;
            justify-content: center;
            align-items: center;

            &__select {
                display: none;
            }

            img {
                &:hover {
                    cursor: pointer;
                    transform: scale(1.02);
                }
            }
            

            background-color: ${$White};

            @media (max-width: ${$breakp576}) {
                width: 100%;
                height: 220px;
            }
        }

        &-data {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            @media (max-width: ${$breakp576}) {
                align-items: center;
            }
        }
    }
    

`