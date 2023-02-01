import styled from 'styled-components';
import { $Gray, $BorderColor, $White, $breakp767,$breakp991, $Black, $headerHeight, $transition} from '../../styles/uiKit';

export const SiteHeader = styled.header`
        position: sticky;
        width: 100%;
        border-bottom: 2px solid ${$BorderColor};
        z-index: 100;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            background-color: ${$Gray};
            z-index: -1;
        }

        &.transparent {
            &.white {
                &::after {
                    background-color: ${$White};
                    opacity: .45;
                    border-bottom: 2px solid ${$Black};
                }
            }

            &.dark {
                &::after {
                    background-color: ${$Black};
                    opacity: .3;
                    border-bottom: 2px solid ${$Black};
                }
            }
            &.text-white {
                .header__navigation {
                    .navigation-link {
                        color: ${$White};
                    }
                }
                
            }
        }
        .header__wrapper {
            min-height: ${$headerHeight};
            display: flex;
            flex-direction: row;
            align-items: stretch;
            justify-content: space-between;

            position: relative;
            z-index: 101;

            .logo {  
                align-self: center;

                transition: ${$transition};

                &:hover {
                    transform: scale(1.05) rotate(10deg);
                }
            }
        }
        .header__navigation {
            display: flex;
            flex-direction: row;

            .navigation-links {
                display: flex;
                flex-direction: row;
                gap: 4rem;

                @media (max-width: ${$breakp991}) {
                    &.desktop {
                        display: none;
                    }
                    &.mobile {
                        flex-direction: column;
                        gap: 3rem;
                    }
                }

                .navigation-link {
                    text-decoration: none;
                    color: ${$Black};
                    font-size: 2rem;
                    line-height: 3rem;
                    font-family: "Montserrat-Medium";
                    font-weight: 400;

                    user-select: none;

                    align-self: center;

                    transition: all .1s ease-in-out;

                    @media (min-width: ${$breakp767}) {
                        &:hover {
                            transform: scale(1.07);
                        }
                    }

                    @media (max-width: ${$breakp991}) {
                        color: ${$White};

                        .btn {
                            background-color: ${$White};
                            color: ${$Black};
                        }
                    }
                }

                .dropdown-link {
                    position: relative;

                    display: flex;
                    flex-direction: row;
                    justify-content: center;

                    &__list {
                        display: none;  
                        flex-direction: column;
                        align-items: center;
                        row-gap: 2rem;

                        position: absolute;
                        top: ${$headerHeight};

                        min-width: max-content;

                        padding: 3rem;

                        background-color: ${$Black};

                        border-bottom-left-radius: .5rem;
                        border-bottom-right-radius: .5rem;
                        
                        .navigation-link {
                            color: ${$White};
                        }
                    }

                    &:hover {
                        .dropdown-link__list {
                            display: flex;
                        }
                    }
                }
            }
            &-burger {
                display: none;

                user-select: none;

                align-self: center;

                padding: 1rem 0;

                &.text-white {
                    div {
                        background-color: ${$White};

                        &::after,
                        &::before {
                            background-color: ${$White};
                        } 
                    }
                }

                @media (max-width: ${$breakp991}) {
                    display: block;
                }

                transition: all .12s ease-in-out;

                &:hover {
                    transform: scale(1.1);
                }

                div {
                    position: relative;

                    user-select: none;

                    background-color: ${$Black};

                    width: 2.5rem;
                    height: .3rem;

                    &::after,
                    &::before {
                        content: "";
                        position: absolute;

                        width: 2.5rem;
                        height: .3rem;

                        background-color: ${$Black};
                    }

                    &::after {
                        bottom: -.8rem;
                    }
                    &::before {
                        top: -.8rem;
                    }
                }

            }
        }
`