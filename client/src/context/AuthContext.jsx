import {createContext} from 'react'
import { post } from '../api/requester';
import { login, logout, register } from '../api/userService';
import useLocalStorageState from '../hooks/setLocalStorageState';

let AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    let [state,setLocalStorageState] = useLocalStorageState({})

    let loginHandler = async (email,password) => {
        
        let data = await login(email, password);    
        let {message} = data;
        if(message){
            return data;
        }

        setLocalStorageState(data);
        return data;
    }

    let registerHandler = async (email,password) => {

        let data = await register(email,password);
        let {message} = data;
        if(message){
            return data;
        }
        setLocalStorageState(data);
        return data;
    }

    let logoutHandler = async() => {
        await logout();
        setLocalStorageState({});
        localStorage.clear();
    }


    let values = {
        loginHandler,
        registerHandler,
        logoutHandler,
        isAuthenticated: !!state.accessToken 
    }
    return (
        <AuthContext.Provider value={values}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
