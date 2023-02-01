import { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite"
import { Button, Input } from '../../../styles/uiKit';
import modal from '../../utilities/modal/store/modal';
import Loader from '../../../components/utilities/loader/Loader';
import auth from './store/auth';
import { Container, PageHeadline } from '../../../styles/uiKit';
import header from '../../header/store/header';
import { LoginSection } from './_login-styles';
import { useNavigate } from "react-router-dom";
import { LoginType, HeaderColors } from '../../../types/types';

const Login = observer(() => {
    const [creds, setCreds] = useState<LoginType>({nickName: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigate();

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.dark, textColor: HeaderColors.white})
    
        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    return (<>
        <LoginSection className="login">
            <Container>
                <div className="login__wrapper">
                    <div className="login__inner">
                        <PageHeadline>Войдите в аккаунт</PageHeadline>

                        <div className='login__form'>
                            <Input placeholder="Enter login" type="text" onChange={(e) => setCreds({...creds, nickName: e.target.value})}/>
                            <Input placeholder="Enter password" type="password" onChange={(e) => setCreds({...creds, password: e.target.value})}/>

                            <div className="login__buttons">
                                <Button 
                                    className="black-btn"
                                    onClick={() => auth.login(creds, setIsLoading)}>
                                        Войти
                                </Button>  
                                <Button 
                                    className="black-btn"
                                    onClick={() => navigation("/login:registration")}>
                                        Зарегистрироваться 
                                </Button>  
                            </div>

                            {!auth.isAuth && <p style={{color: "#c30303"}}>{modal.modals.error.message}</p>}
                        </div>
                    </div>
                </div>
            </Container>
        </LoginSection>

        {isLoading && <Loader isLoading={isLoading} />}
    </>)
})

export default Login