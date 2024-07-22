import { get } from "./requester";

export async function  getAllCars(){
    return await get("http://localhost:3030/data/cars");
}

export async function getCertainCar(brand){
    brand = brand.toLowerCase()
   let data = await getAllCars();
   let result = []
   for(let item of data){
    let searchItem = item.carBrand.toLowerCase();
    if (searchItem.includes(brand)){
        result.push(item);
    }
   }
   return result;
}

export async function getOneCar(id){
    return await get(`http://localhost:3030/data/cars/${id}`);
}

export async function getAllCreatedCarsByUser(userID){
    let data = await getAllCars();
    let result = [];
    for (let item of data ){
        if (item._ownerId == userID){
            result.push(item);
        }
    }
    return result;
}

export async function getAllLikedCarsByUser(userID){
    let data = await getAllCars();
    let result = [];
    for (let item of data){
        for (let like of item.likes){
            if (like == userID){
                result.push(item)
            }
        }
    }
    return result;
}