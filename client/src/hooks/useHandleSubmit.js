import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createLikesForCar, editItem, listItem } from '../api/carsService'
import useErrorHandler from "./useErrorsHandler";

export default function useHandleSubmit(value, itemID){
        let [err, setErr] = useState([]);
        let navigate = useNavigate();
    
        let listSubmitHandler = async (e) => {
            e.preventDefault();

            let {errors,items} = useErrorHandler(value)

            if (errors.length > 0){
                setErr(errors);
                return;
            }
            
            let response = await listItem(items);
            if(response.message){
                setErr([{message: response.message}]);
                return;
            }
            await createLikesForCar(response._id, response._ownerId);
            navigate('/catalog');
    
        }

        let ediSubmitHandler = async (e) => {
            e.preventDefault();
    
            let {errors,items} = useErrorHandler(value)

            if (errors.length > 0){
                setErr(errors);
                return;
            }

            let response = await editItem(itemID,items)
            if (response.message){
                setErr([{message:response.message}]);
                return;
            }
            navigate(`/catalog/details/${itemID}`);
        }
    
        let divKill = (e) => {
            setErr([]);
        }
    
        return {
            err,
            listSubmitHandler,
            ediSubmitHandler,
            divKill
        }
    }