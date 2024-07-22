import {createContext} from 'react'
import { post } from '../api/requester';
import { login } from '../api/userService';
import useLocalStorageState from '../hooks/setLocalStorageState';

let AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    let [state,setLocalStorageState] = useLocalStorageState({})
    console.log(state);

    let loginHandler = async (email,password) => {
        
        let data = await login(email, password);    
        let {message} = data;
        if(message){
            return data;
        }

        setLocalStorageState(data);
        return data;
    }


    let values = {
        loginHandler,
        isAuthenticated: !!state.accessToken 
    }
    return (
        <AuthContext.Provider value={values}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
