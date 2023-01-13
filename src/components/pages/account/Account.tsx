
import { useEffect } from 'react';
import auth from '../../../store/auth';
import { useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate();

    useEffect(() => {
        !auth.isAuth && navigate("/login"); 
    }, [auth.isAuth])

    return (<>
        <section className="main-block">
            <h2>Hello</h2>
        </section>
    </>)
}

export default Account