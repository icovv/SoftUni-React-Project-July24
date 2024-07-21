import {createContext} from 'react'

let AuthContext = createContext();

export default AuthProvider =>({
    children,
}) => {
    
    let values = {

    }
    return (
        <AuthContext.Provider value={values}>
                {children}
        </AuthContext.Provider>
    )
}