import { post,get } from "./requester";

export async function register(email,password){
    return await post(`${import.meta.env.VITE_API_URL}/users/register`,{email,password})
}
export async function login(email,password){
    return await post(`${import.meta.env.VITE_API_URL}/users/login`,{email,password})

}
export async function logout(){
    return await get(`${import.meta.env.VITE_API_URL}/users/logout`);
}