import React from 'react';
import './styles/base.scss';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Clocks from './components/pages/clocks/Clocks';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Todos from './components/pages/todos/Todo';
import Account from './components/pages/account/Account';
import Login from './components/pages/login/Login';
import auth from './store/auth';
import { Navigate } from 'react-router-dom';

export const Main = () => {
    return <>
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />} />

                {!auth.isAuth?<Route path='*' element={<Navigate to='/' />} />:
                    <>
                        <Route path='/clocks' element={<Clocks />}/>
                        <Route path='/todos' element={<Todos />}/>
                        <Route path='/account' element={<Account />} />
                    </>
                }
            </Routes>
            <Footer />
        </HashRouter>
    </>
}