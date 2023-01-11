import React from 'react';
import './styles/base.scss';
import { Container } from './styles/uiKit';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Clocks from './components/clocks/Clocks';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Todos from './components/todos/Todo';

export const Main = () => {
    return <>
        <HashRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/clocks' element={<Clocks />}/>
                    <Route path='/todos' element={<Todos />}/>
                </Routes>
            </Container>
        </HashRouter>
    </>
}