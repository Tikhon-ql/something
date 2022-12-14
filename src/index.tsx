import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/clocks/Clocks';
import './styles/base.scss';
import { Container } from './styles/uiKit';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Container>
        <App />
    </Container>
);