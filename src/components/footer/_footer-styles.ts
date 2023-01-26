import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/variables'
import {  
    $DeepGray, 
    $BorderColor, 
    $breakp576, 
    $breakp767, 
    $Black, 
} from '../../styles/variables';

export const SiteFooter = styled.footer`
    width: 100%;
    background-color: ${$DeepGray};

    border-top: 2px solid ${$BorderColor};

    .footer__navigation {
        display: flex;
        flex-direction: row;
        align-items: center;

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
`