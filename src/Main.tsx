import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Films from './components/pages/films/Films';
import auth from './components/pages/login/store/auth';
import Registration from './components/pages/registration/Registration';
import Contacts from './components/pages/contact/Contacts';
import { FilmsType } from './types/types';

import './styles/base.scss';

export const Main = () => {
    return <>
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contacts' element={<Contacts />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/login:registration' element={<Registration />} />

                {!auth.isAuth?<Route path='*' element={<Home />} />:
                    <>
                        <Route path='/films' element={<Films type={FilmsType.all} />} />
                        <Route path='/films/my-collection' element={<Films type={FilmsType.my} />} />
                    </>
                }
            </Routes>
        </HashRouter>
    </>
}