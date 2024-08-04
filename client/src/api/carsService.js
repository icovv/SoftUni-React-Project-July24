import { del, get, post, put } from "./requester";

export async function getAllCars() {
    return await get(`${import.meta.env.VITE_API_URL}/data/cars`);
}

export async function getCertainCar(searchParam,dropdown) {
    if (dropdown == `carModel` || dropdown == 'carBrand'){
    searchParam = searchParam.toLowerCase();
    }
    let data = await getAllCars();
    let result = [];
    if (searchParam == ``){
        return data;
    } else if (dropdown == `carModel`){
        result = data.filter(car => car.carModel.toLowerCase().includes(searchParam.toLowerCase()))
    } else if (dropdown == `carBrand`){
        result = data.filter(car => car.carBrand.toLowerCase().includes(searchParam.toLowerCase()))
    } else if (dropdown == `horsePowerMore`){
        result = data.filter(car => car.horsePower >= Number(searchParam))
    } else if (dropdown == `horsePowerLess`){
        result = data.filter(car => car.horsePower <= Number(searchParam))
    }

    return result;
}

export async function getOneCar(id) {
    return await get(`${import.meta.env.VITE_API_URL}/data/cars/${id}`);
}

export async function getAllCreatedCarsByUser(userID) {
    let data = await getAllCars();
    let result = [];
    for (let item of data) {
        if (item._ownerId == userID) {
            result.push(item);
        }
    }
    return result;
}

export async function getAllLikedCarsByUser(userID) {
    let data = await getAllCars();
    
    let result = data.filter(car => car.likes.includes(userID));

    return result;
}

export async function getCertainCarLikes(id){
    let data = await getOneCar(id);
    return data.likes;
}

export async function listItem(items) {
    let data = await post(`${import.meta.env.VITE_API_URL}/data/cars`, items);
    return data;
}

export async function editItem(carID,items){
    let data = await put(`${import.meta.env.VITE_API_URL}/data/cars/${carID}`,items);
    return data;
}

export async function deleteCar(id) {
    return await del(`${import.meta.env.VITE_API_URL}/data/cars/${id}`);
}

export async function hasUserLiked(userID,itemID){
    let data = await getOneCar(itemID);
    for (let like of data.likes) {
        if (like == userID){
            return true;
        }
    }
    return false;
}

export async function addLikesToCar(carID, userID){
    let car = await getOneCar(carID);
    car.likes.push(userID);
    return await put(`${import.meta.env.VITE_API_URL}/data/cars/${car._id}`,car,`admin`);
}

export async function removeLikeFromCar(carID,userID){
    let car = await getOneCar(carID);
    let newData = car.likes.filter((item) => item != userID);
    car.likes = newData;
    return await put(`${import.meta.env.VITE_API_URL}/data/cars/${car._id}`,car,`admin`);
}