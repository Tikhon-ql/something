import {makeAutoObservable} from "mobx"
import modal from "../../../utilities/modal/store/modal"
import { method } from "../../../../api/methods"
import { UserData, LoginType, AccessType } from '../../../../types/types';

class Auth {
    isAuth: boolean = (localStorage.getItem('isAuth') == "true"?true:false) || false;
    accessToken: string = "";

    userData: UserData = {
        name: "",
        secondName: "",
        phoneNumber: "",
        userId: 0
    }

    constructor() {
        makeAutoObservable(this)
    }

    async login(_creds: LoginType, setIsLoading: Function) {
        try {
            setIsLoading(true)
            const {accessToken}: AccessType = (await method.login(_creds)).data;

            if(accessToken) {
                this.setIsAuth(true)
                this.accessToken = accessToken;
                localStorage.setItem('isAuth', "true")
                localStorage.setItem('accessToken', accessToken)
    
                window.location.replace("#/")
                window.location.reload()
            }
            else throw 1;
            
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
        finally {
            setIsLoading(false)
        }
    }
    setIsAuth(_value) {
        this.isAuth = _value
    }

    async registration(_regCreds: LoginType, setIsLoading: Function) {
        try {
            setIsLoading(true)
            await method.registration(_regCreds);    

            await this.login(_regCreds, setIsLoading);

            window.location.replace("#/")
            window.location.reload()
        }
        catch(e) {
            modal.setErrorMessage("Не удалось зарегистрироваться")
        }
        finally {
            setIsLoading(false)
        }
    }
    exit() {
        try {
            localStorage.clear()
            window.location.replace("#/")
            window.location.reload()
        }
        catch(e) {
            modal.setErrorMessage("Что-то пошло не так")
        }
    }
}

export default new Auth();