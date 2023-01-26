import styled from 'styled-components';
import '../../styles/variables'
import { $Gray, $BorderColor, $White, $breakp767, $Black, $headerHeight} from '../../styles/variables';

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
                    opacity: .9;
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
        }
        .header__wrapper {
            min-height: ${$headerHeight};
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            position: relative;
            z-index: 101;
        }
        .header__navigation {
            display: flex;
            flex-direction: row;
            align-items: center;

            .navigation-links {
                display: flex;
                flex-direction: row;
                gap: 4rem;

                @media (max-width: ${$breakp767}) {
                    .header__navigation.desktop {
                        display: none;
                    }
                    .header__navigation.mobile {
                        flex-direction: column;
                        gap: 3rem;
                    }
                }

                
                .navigation-link {
                    text-decoration: none;
                    color: ${$Black};
                    font-size: 2rem;
                    line-height: 3rem;

                    user-select: none;

                    transition: all .1s ease-in-out;

                    @media (min-width: ${$breakp767}) {
                        &:hover {
                            transform: scale(1.07);
                        }
                    }

                    &.logo {
                        position: relative;
                        left: 0;
                    }

                    @media (max-width: ${$breakp767}) {
                        color: ${$White};
                    }
                }
            }
            &-burger {
                display: none;

                user-select: none;

                padding: 1rem 0;

                @media (max-width: ${$breakp767}) {
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