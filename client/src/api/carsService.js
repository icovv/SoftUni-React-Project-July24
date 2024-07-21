import { get } from "./requester";

export async function  getAllCars(){
    return await get("http://localhost:3030/data/cars");
}

export async function getOneCar(id){
    return await get(`http://localhost:3030/data/cars/${id}`);
}