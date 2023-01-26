import { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite"
import { Button, Input } from '../../../styles/uiKit';
import modal from '../../../store/modal';
import auth, { LoginType } from '../../../store/auth';
import { Container } from '../../../styles/uiKit';
import header, { HeaderColors } from '../../../store/header';
import { LoginSection } from './_login-styles';
import Mount from "../../../images/mount.jpg"

const Login = observer(() => {
    const [creds, setCreds] = useState<LoginType>({login: "", password: ""})

    useEffect(() => {
        header.setIsTransparent(true, HeaderColors.dark)
    
        return () => {
            header.setIsTransparent(false)
        };
    }, [])

    return (
        <LoginSection imgUrl={Mount} className="login">
            <Container>
                <div className="login__wrapper">
                    <h2>Войдите в аккаунт</h2>
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

                        {!auth.isAuth && <p style={{color: "#c30303"}}>{modal.modals.error.message}</p>}
                    </div>
                </div>
            </Container>
        </LoginSection>
    )
})

export default Login