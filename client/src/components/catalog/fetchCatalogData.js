import { useEffect, useState } from "react";
import { getAllCars } from "../../api/carsService";

export default function fetchCatalogData(){
    let [cars,setCars] = useState([]);
    let [loading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getCars(){
            let data = await getAllCars();
            setCars(data);
            setIsLoading(false);
        }
        getCars();
    },[]);

    return{
        cars,
        loading
    }
}