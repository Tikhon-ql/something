import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/uiKit'
import {  
    $DeepGray, 
    $BorderColor, 
    $breakp576, 
    $breakp767, 
    $Black,
    $transition, 
} from '../../styles/uiKit';

export const SiteFooter = styled.footer`
    width: 100%;
    background-color: ${$DeepGray};

    border-top: 2px solid ${$BorderColor};

    .footer__navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media (max-width: ${$breakp767}) {
            flex-direction: column;
            gap: 3rem;
        }
        @media (max-width: ${$breakp576}) {
            align-items: flex-start;
            gap: 5rem;
        }

        .navigation-links {
            display: flex;
            flex-direction: row;
            gap: 4rem;

                
            @media (max-width: ${$breakp576}) {
                flex-direction: column;
                gap: 3rem;
            }

            .navigation-link {
                text-decoration: none;
                color: ${$Black};
                font-size: 2rem;
                line-height: 3rem;

                transition: all .1s ease-in-out;

                @media (min-width: ${$breakp767}) {
                    &:hover {
                        transform: scale(1.07);
                    }
                }

            }
        }
    }
    .footer__social-links {
        display: flex;
        flex-direction: row;
        column-gap: 1rem;

        

        .svg-icon {
            transition: transform .2s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
`