import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthGuard(props){
    let {isAuthenticated} = useContext(AuthContext);
    if(!isAuthenticated){
        return <Navigate to = '/login'/>;
    }
    return(
        <>
            {props.children}
        </>
    )
}   