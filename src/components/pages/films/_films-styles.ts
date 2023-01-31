import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Gray, $White, $breakp1200, $breakp767, $breakp576, $Black} from '../../../styles/uiKit';

import Plus from "../../../styles/images/plus.png"
import Minus from "../../../styles/images/minus.png"


export const HeadSection = styled.section`
    padding-bottom: 0;
    text-align: center;

    h2 {
        text-align: center;
    }

    display: flex;
    flex-direction: column;

    align-items: center;

    .search {
        margin: 3rem 0;

        width: 100%;
    }
`

export const FilmsSection = styled.section`
    padding-top: 2rem;
    
    .films__list {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 5rem;

        .film-item {
            border-radius: 1rem;
            overflow: hidden;

            width: 100%;

            &.open {
                .icon {
                    background: center/cover url(${Minus});
                }

                .film-item__submenu {
                    display: block;
                }
            }

            &__head {
                position: relative;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 6rem;

                padding: 3rem 3rem 8rem 3rem;

                background-color: ${$Gray};

                @media (max-width: ${$breakp767}) {
                    flex-direction: column;
                    align-items: start;
                    gap: 2rem;
                }

                &-name {
                    font-size: 2rem;
                    line-height: 3rem;

                    font-weight: 600;
                }

                .icon {
                    content: "";
                    position: absolute;

                    bottom: 20px;
                    right: 30px;

                    width: 40px;
                    height: 40px;

                    transition: all .2s;

                    background: center/cover url(${Plus});

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            .film-item__add {
                position: absolute;
                bottom: 2rem;
                cursor: pointer;

                font-size: 15px;
                line-height: 1;

                border-radius: 1rem;

                padding: 1.5rem 2rem;

                @media (max-width: ${$breakp576}) {
                    position: static;
                }
            }

            &__submenu {
                display: none;

                transition: all .4s;

                background: ${$Black};
                padding: 3rem 4rem;

                @media (max-width: ${$breakp576}) {
                    padding: 3rem 2rem;
                }

                p {
                    color: ${$White};
                }
            }
        }
    }
    .films__btn {
        margin: 5rem auto 0 auto;
    }
`