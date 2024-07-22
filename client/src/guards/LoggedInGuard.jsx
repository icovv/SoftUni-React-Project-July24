import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function LoggedInGuard(){
    let {isAuthenticated} = useContext(AuthContext);

    if(isAuthenticated){
        return <Navigate to = '/'></Navigate>
    }

    return(
        <Outlet></Outlet>
    )
}