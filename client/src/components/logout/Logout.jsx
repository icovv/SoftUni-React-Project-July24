import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Logout(){
    let {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        let logout = async() => {
            await logoutHandler()
        }
        logout()
    })

    return <Navigate to = '/' ></Navigate>
}