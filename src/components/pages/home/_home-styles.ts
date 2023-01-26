import React, { Component } from 'react';
import styled from 'styled-components';
import '../../../styles/variables'
import { SectionWithImage } from '../../../styles/uiKit';
import { $Gray, $White} from '../../../styles/variables';
import img from "../../../images/mirors.jpg"

export const MainSection = styled(SectionWithImage)`
    height: 100vh;
    width: 100%;

    border-bottom: 0;

    &::after {
        background: ${`left/cover url(${img}) ${$Gray} no-repeat`};
        filter: none;
    }

    &::before {
        content: "";
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: linear-gradient(to bottom, transparent 0%, transparent 60%, ${$White} 100%);
    }
    border-bottom: none;
`
