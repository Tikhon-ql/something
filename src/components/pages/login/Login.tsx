import { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite"
import { Button, Input } from '../../../styles/uiKit';
import modal from '../../../store/modal';
import auth, { LoginType } from '../../../store/auth';
import { Container } from '../../../styles/uiKit';
import './_login.scss';
import header from '../../../store/header';

const Login = observer(() => {
    const [creds, setCreds] = useState<LoginType>({login: "", password: ""})

    useEffect(() => {
        header.toggle(true)
    
        return () => {
            console.log("unmount")
            header.toggle(false)
        };
    }, [])

    return (
        <section id='login' className='login'>
            <Container>
                <div className="login__wrapper">
                    <h2>Login</h2>
                    <div className='login__form'>
                        <Input placeholder="Enter login" type="text" onChange={(e) => setCreds({...creds, login: e.target.value})}/>
                        <Input placeholder="Enter password" type="password" onChange={(e) => setCreds({...creds, password: e.target.value})}/>

                        <div className="login__buttons">
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
                        </div>

                        {!auth.isAuth && modal.modals.error.message}
                    </div>
                </div>
            </Container>
        </section>
    )
})

export default Login