import { useEffect, useState } from "react";
import { getAllCreatedCarsByUser, getAllLikedCarsByUser } from "../../api/carsService";

export default function useFetchProfileData(id){
    let [cars,setCars] = useState({listed:[],liked:[]});
    let [loading, setIsLoading] = useState(true);
    useEffect(()=> {
        async function getCreatedCars(){
            let listed = await getAllCreatedCarsByUser(id);
            let liked = await getAllLikedCarsByUser(id);
            setCars({listed:listed, liked:liked});
            setIsLoading(false);
        }
        getCreatedCars();
    },[])
    return{
        cars,
        loading
    }
}