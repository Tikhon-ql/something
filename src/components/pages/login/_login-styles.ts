import React, { Component } from 'react';
import styled from 'styled-components';
import '../../../styles/variables'
import { SectionWithImage } from '../../../styles/uiKit';
import { $Gray} from '../../../styles/variables';
import img from "../../../images/mount.jpg"

export const LoginSection = styled(SectionWithImage)`
    height: 100vh;
    border-bottom: 0;

    &::after {
        background: ${`left/cover url(${img}) ${$Gray} no-repeat`};
    }

    .login__buttons {
        margin-top: 5rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        width: 100%;

        .black-btn {
            min-width: 45rem;
        }
    }
    .login__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login__form {
        width: 100%;
        margin-top: 5rem;
    
        display: flex;
        flex-direction: column;
        align-items: center;
    
        gap: 2rem;
    }
`
