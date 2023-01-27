import { useEffect, useState } from 'react';
import auth from '../../../store/auth';
import { useNavigate } from "react-router-dom";
import { Container } from '../../../styles/uiKit';
import { observer } from 'mobx-react-lite';
import { AccountsSection } from './_account-styles';
import DefaultProfilePhoto from "../../../styles/images/account/profile-photo.png"

const Account = observer(() => {
    const navigate = useNavigate();

    useEffect(() => {
        !auth.isAuth && navigate("/login"); 
    }, [auth.isAuth])

    return (
        <Container minHeight={"100vh"} className="container">
            <AccountsSection className="account">
                <div className="account__main-info">
                    <div className="account-img">
                        <input id="file" className='account-img__select' type="file" onChange={(e) => console.log(e.target.value)} ></input>
                        <label htmlFor="file"><img src={DefaultProfilePhoto} alt="" /></label></div>
                    <div className="account-data">
                        <h3 className="name">{auth.userData.name}, {auth.userData.secondName}</h3>
                        <p className="phone">{auth.userData.phoneNumber}</p>
                    </div>
                </div>
            </AccountsSection>
        </Container>
    )
})

export default Account