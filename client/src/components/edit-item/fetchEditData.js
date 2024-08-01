import { useEffect } from "react";
import { getOneCar } from "../../api/carsService";

export default function fetchEditData(itemID, changeValues){
    useEffect(() => {
        async function getItem(){
            let data = await getOneCar(itemID);
            changeValues({
                brand: data.carBrand,
                year: data.year,
                model: data.carModel,
                capacity: data.engineCapacity,
                power: data.horsePower,
                fuel: data.fuelType,
                color: data.color,
                image: data.imageURL,
                description: data.description,
            });
        }
        getItem();
    },[])
}