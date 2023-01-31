import './styles/base.scss';
import { HashRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Account from './components/pages/account/Account';
import Login from './components/pages/login/Login';
import Films from './components/pages/films/Films';
import auth from './store/auth';
import { Navigate } from 'react-router-dom';
import Registration from './components/pages/registration/Registration';
import MyFilms from './components/pages/films/MyFilms';

export const Main = () => {
    return <>
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/login:registration' element={<Registration />} />

                {!auth.isAuth?<Route path='*' element={<Navigate to='/' />} />:
                    <>
                        <Route path='/account' element={<Account />} />
                        <Route path='/films' element={<Films />} />
                        <Route path='/films/my-collection' element={<MyFilms />} />
                    </>
                }
            </Routes>
            <Footer />
        </HashRouter>
    </>
}