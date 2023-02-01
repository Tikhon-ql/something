import { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite"
import { Button, Input } from '../../../styles/uiKit';
import modal from '../../utilities/modal/store/modal';
import Loader from '../../utilities/loader/Loader';
import auth from '../login/store/auth';
import { Container, PageHeadline } from '../../../styles/uiKit';
import header from '../../header/store/header';
import { RegistrationSection } from "./_registration-styles";
import { $White } from '../../../styles/uiKit';
import { LoginType, HeaderColors } from '../../../types/types';

const Registration = observer(() => {
    const [creds, setCreds] = useState<LoginType>({password: "", nickName: "", email: ""})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.dark, textColor: HeaderColors.white})
    
        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    return (<>
            <RegistrationSection className="register">
                <Container>
                    <div className="register__wrapper">
                        <div className="register__inner">
                            <PageHeadline style={{color: `${$White}`}}>Регистрация</PageHeadline>
                            <div className='register__form'>
                                <Input style={{width: "40rem"}} placeholder="Enter login" type="text" onChange={(e) => setCreds({...creds, nickName: e.target.value})}/>
                                <Input style={{width: "40rem"}} placeholder="Enter password" type="password" onChange={(e) => setCreds({...creds, password: e.target.value})}/>
                                <Input style={{width: "40rem"}} placeholder="Enter email" type="email" onChange={(e) => setCreds({...creds, email: e.target.value})}/>

                                <Button 
                                    className="black-btn"
                                    onClick={() => {
                                        auth.registration(creds, setIsLoading);
                                    }}>
                                        Зарегистрироваться 
                                </Button>  

                                {!auth.isAuth && <p style={{color: "#c30303"}}>{modal.modals.error.message}</p>}
                            </div>
                        </div>
                    </div>
                </Container>
            </RegistrationSection>

            {isLoading && <Loader isLoading={isLoading} />}
    </>)
})

export default Registration