import {createContext} from 'react'
import { post } from '../api/requester';
import { login } from '../api/userService';
import useLocalStorageState from '../hooks/setLocalStorageState';

let AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    let [state,setLocalStorageState] = useLocalStorageState({})

    let loginHandler = async (value) => {
        let data = await login(value.email, value.passowrd);
        console.log(data);
        setLocalStorageState(data);
    }


    let values = {
        loginHandler,
    }
    return (
        <AuthContext.Provider value={values}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
