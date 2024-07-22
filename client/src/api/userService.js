import { post,get } from "./requester";

export async function register(email,password){
    return await post("http://localhost:3030/users/register",{email,password})
}
export async function login(email,password){
    return await post("http://localhost:3030/users/login",{email,password})

}
export async function logout(){
    return await get(`http://localhost:3030/users/logout`);
}