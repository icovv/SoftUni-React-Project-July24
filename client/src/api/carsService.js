import { del, get, post, put } from "./requester";

export async function getAllCars() {
    return await get("http://localhost:3030/data/cars");
}

export async function getCertainCar(brand) {
    brand = brand.toLowerCase()
    let data = await getAllCars();
    let result = []
    for (let item of data) {
        let searchItem = item.carBrand.toLowerCase();
        if (searchItem.includes(brand)) {
            result.push(item);
        }
    }
    return result;
}

export async function getOneCar(id) {
    return await get(`http://localhost:3030/data/cars/${id}`);
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
    let data = await get("http://localhost:3030/jsonstore/likes/likes");
    let dataAsArr = Object.entries(data);
    let result = [];
    for (let [id,itemData] of dataAsArr) {
            for (let like of itemData.likesCounter){
                if (like == userID) {
                    result.push(itemData)
                }
            }
        }
    return result;
}

export async function getCertainCarLikes(id){
    let data = await get("http://localhost:3030/jsonstore/likes/likes");
    let dataAsArr = Object.entries(data);
    for (let [itemID,itemData] of dataAsArr) {
        if (itemData.carID == id){
            return itemData
        }
        }
}

export async function listItem(items) {
    let data = await post("http://localhost:3030/data/cars", items);
    return data;
}

export async function editItem(carID,items){
    let data = await put(`http://localhost:3030/data/cars/${carID}`,items);
    return data;
}

export async function createLikesForCar(carID,userID){
   return await post ('http://localhost:3030/jsonstore/likes/likes', {"carID": carID, likesCounter: [], "_ownerId": userID});

}

export async function deleteCar(id) {
    return await del(`http://localhost:3030/data/cars/${id}`);
}

export async function hasUserLiked(userID,itemID){
    let data = await getCertainCarLikes(itemID);
    for (let like of data.likesCounter) {
        if (like == userID){
            return true;
        }
    }
    return false;
}

export async function deleteCarLikes(carID){
    let car = await getCertainCarLikes(carID);
    let carLikesID = car._id;
    return await del(`http://localhost:3030/jsonstore/likes/likes/${carLikesID}`)
}
export async function addLikesToCar(carID, userID){
    let car = await getCertainCarLikes(carID);
    car.likesCounter.push(userID);
    return await put(`http://localhost:3030/jsonstore/likes/likes/${car._id}`,car);
}

export async function removeLikeFromCar(carID,userID){
    let car = await getCertainCarLikes(carID);
    let newData = car.likesCounter.filter((item) => item != userID);
    car.likesCounter = newData;
    return await put(`http://localhost:3030/jsonstore/likes/likes/${car._id}`,car);
}