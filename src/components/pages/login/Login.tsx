import { useState } from 'react';
import Loader from '../../utilities/loader/Loader';
import {observer} from "mobx-react-lite"
import Modal from '../../utilities/modal/Modal'
import { Button, Input } from '../../../styles/uiKit';
import modal, { ModalType } from '../../../store/modal';
import auth, { LoginType } from '../../../store/auth';
import './_login.scss';

const Login = observer(() => {
    const [creds, setCreds] = useState<LoginType>({login: "", password: ""})
    const [error, setError] = useState("")

    return <>
        <section id='login' className='login'>
            <div className="login__wrapper">
                <h2>Login</h2>
                <div className='login__form'>
                    <Input type="text" onChange={(e) => setCreds({...creds, login: e.target.value})}/>
                    <Input type="password" onChange={(e) => setCreds({...creds, password: e.target.value})}/>

                    <Button 
                        className="black-btn"
                        onClick={() => auth.isUserExist(creds)}>
                            Войти
                    </Button>  
                    <Button 
                        className="black-btn"
                        onClick={() => auth.register(creds)}>
                            Зарегистрироваться 
                    </Button>  

                    {!auth.isAuth && modal.modals.error.message}
                </div>
            </div>
        </section>
    </>
})

export default Login