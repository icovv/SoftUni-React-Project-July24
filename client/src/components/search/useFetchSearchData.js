import { useEffect, useState } from "react";
import { getAllCars } from "../../api/carsService";

export default function fetchSearchData(){
    let [loading,setIsLoading] = useState(true);
    let [data, setData] = useState([]);
    let [reloadData, setReloadData] = useState(false);
    
    let dataSetter = (newValue) => {
        setData(newValue)
    }
    let dataReloader = (newValue) => {
        setReloadData(true);
    }
    let isLoadingChanger = (newValue) => {
        setIsLoading(true);
    }
    useEffect(()=> {
        async function takeInitialData(){
           let fetchedData = await getAllCars();
           setData(fetchedData)
           setIsLoading(false);
           setReloadData(false);
        }
        takeInitialData();

    }, [reloadData == true])
    return {
        data,
        loading,
        dataSetter,
        dataReloader,
        isLoadingChanger
    }
}