import React from 'react';
import './styles/base.scss';
import { Container } from './styles/uiKit';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Clocks from './components/pages/clocks/Clocks';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Todos from './components/pages/todos/Todo';

export const Main = () => {
    return <>
        <HashRouter>
            <Header />
            <Container minHeight={"100vh"} className="container">
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/clocks' element={<Clocks />}/>
                    <Route path='/todos' element={<Todos />}/>
                </Routes>
            </Container>
            <Footer />
        </HashRouter>
    </>
}