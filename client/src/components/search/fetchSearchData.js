import { useEffect, useState } from "react";
import { getAllCars } from "../../api/carsService";

export default function fetchSearchData(){
    let [loading,setIsLoading] = useState(true);
    let [data, setData] = useState([]);
    
    let dataSetter = (newValue) => {
        setData(newValue)
    }
    useEffect(()=> {
        async function takeInitialData(){
           let fetchedData = await getAllCars();
           setData(fetchedData)
           setIsLoading(false);
        }
        takeInitialData();

    }, [])
    return {
        data,
        loading,
        dataSetter
    }
}