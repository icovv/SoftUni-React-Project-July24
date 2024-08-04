import { useEffect } from "react";
import { getOneCar } from "../../api/carsService";
import { useNavigate } from "react-router-dom";

export default function useFetchEditData(itemID, changeValues){
    let navigate = useNavigate();
    useEffect(() => {
        async function getItem(){
            let data = await getOneCar(itemID);
            if (data.code == 404){
                navigate('*');
                return;
            }
            changeValues({
                brand: data.carBrand,
                year: data.year,
                model: data.carModel,
                capacity: data.engineCapacity,
                likes: data.likes,
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