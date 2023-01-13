import { useEffect } from 'react';
import auth from '../../../store/auth';
import { useNavigate } from "react-router-dom";
import { Container } from '../../../styles/uiKit';
import header from '../../../store/header';
import { observer } from 'mobx-react-lite';

const Account = () => {
    const navigate = useNavigate();

    useEffect(() => {
        !auth.isAuth && navigate("/account"); 
    }, [auth.isAuth])

    return (
        <Container minHeight={"100vh"} className="container">
            <section className="main-block">
                <h2>Hello</h2>
            </section>
        </Container>
    )
}

export default Account