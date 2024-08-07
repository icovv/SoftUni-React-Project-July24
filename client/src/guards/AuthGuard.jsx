import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard(){
    let {isAuthenticated} = useContext(AuthContext);
    if(isAuthenticated == false){
        return <Navigate to='/login'></Navigate>
    }

    return(
        <>
            <Outlet></Outlet>
        </>
    )
}   