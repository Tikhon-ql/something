import styled from 'styled-components';
import '../../../styles/uiKit'
import { $Gray, $White, $breakp1200, $breakp767, $breakp576, $Black} from '../../../styles/uiKit';

import Plus from "../../../styles/images/plus.png"
import Minus from "../../../styles/images/minus.png"

export const FilmsSection = styled.section`
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

                padding: 4rem 4rem 8rem 4rem;

                background-color: ${$Gray};

                @media (max-width: ${$breakp767}) {
                    flex-direction: column;
                    align-items: start;
                    gap: 2rem;
                }

                .icon {
                    content: "";
                    position: absolute;

                    bottom: 20px;
                    right: 20px;

                    width: 40px;
                    height: 40px;

                    transition: all .2s;

                    background: center/cover url(${Plus});

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            &__submenu {
                display: none;

                transition: all .4s;

                background: ${$Black};
                padding: 3rem 4rem;

                p {
                    color: ${$White};
                }
            }
        }
    }

`