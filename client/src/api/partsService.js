import { get } from "./requester";

export async function  getAllParts(){
    return await get("http://localhost:3030/data/parts");
}