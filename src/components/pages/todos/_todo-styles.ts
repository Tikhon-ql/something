import styled from 'styled-components';
import '../../../styles/uiKit'
import { $breakp767, $breakp991, $DeepGray, $breakp576, $transition} from '../../../styles/uiKit';

export const TodosSection = styled.section`
    .todos-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        transition: all 0.3s ease-in;

        @media (max-width: ${$breakp991}) {
            grid-template-columns: 1fr;
        }

        .todo {
            &-item {
                position: relative;

                display: flex;
                flex-direction: row;
                align-items: center;

                padding: 2rem 5rem 2rem 2rem;
                background-color: ${$DeepGray};
                
                border-radius: 1rem;

                transition: all .15s ease-in;

                &:hover {
                    transform: scale(1.02);
                }

                &__id {
                    font-size: 2rem;
                    margin-right: 1.5rem;
                }
                &__status {
                    min-width: 20px;
                    min-height: 20px;
                    margin-right: 2rem;
                }
                &__title {
                    font-size: 2rem;
                    font-weight: 500;

                    &.status-true {
                        color: #1daf21;
                    } 
                }
                &__close {
                    position: absolute;
                    right: 2rem;

                    img {
                        transform: scale(1.1);
                        transition: ${$transition};

                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }
`

export const ButtonsSection = styled.section`
    .buttons__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        @media (max-width: ${$breakp767}) {
            flex-direction: column-reverse;
            align-items: center;
            gap: 3rem;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            @media (max-width: ${$breakp576}) {
                width: 100%;
            }

            input {
                border: 2px solid black;
                height: 5rem;

                font-size: 2rem;

                &:focus {
                    border: 2px solid #79CAE8;
                    outline: none;
                }
            }

            a {
                width: 100%;
            }
        }

        .black-btn {
            margin: 0;
        }
    }
`
