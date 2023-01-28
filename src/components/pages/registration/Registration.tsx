import { useEffect, useState } from 'react';
import {observer} from "mobx-react-lite"
import { Button, Input } from '../../../styles/uiKit';
import modal from '../../../store/modal';
import Loader from '../../utilities/loader/Loader';
import auth, { LoginType } from '../../../store/auth';
import { Container } from '../../../styles/uiKit';
import header, { HeaderColors } from '../../../store/header';
import { RegistrationSection } from "./_registration-styles";
import Mount from "../../../styles/images/mount.jpg"
import { $White } from '../../../styles/uiKit';

const Registration = observer(() => {
    const [creds, setCreds] = useState<LoginType>({nickName: "", password: "", firstName: "", lastName: "", email: ""})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        header.setIsTransparent(true, HeaderColors.white)
    
        return () => {
            header.setIsTransparent(false)
        };
    }, [])

    return (<>
            <RegistrationSection imgUrl={Mount} className="register">
                <Container>
                    <div className="register__wrapper">
                        <h2 style={{color: `${$White}`}}>Регистрация</h2>
                        <div className='register__form'>
                            <Input style={{width: "40rem"}} placeholder="Enter firstname" type="text" onChange={(e) => setCreds({...creds, firstName: e.target.value})}/>
                            <Input style={{width: "40rem"}} placeholder="Enter lastname" type="text" onChange={(e) => setCreds({...creds, lastName: e.target.value})}/>
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
                </Container>
            </RegistrationSection>

            {isLoading && <Loader isLoading={isLoading} />}
    </>)
})

export default Registration