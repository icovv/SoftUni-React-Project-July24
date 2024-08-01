import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createLikesForCar, editItem, getCertainCar, listItem } from '../api/carsService'
import useErrorHandler from "./useErrorsHandler";

export default function useHandleSubmit(value, itemID,changeValues, handler, dataSetter){
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

        let loginSubmitHandler = async (e) => {
            e.preventDefault();
            if (value.email.trim() == '' || value.password.trim() == ''){
                changeValues({ email: value.email, password:'',})
                setErr([{message:"All fields are required!"}])
                return;
            }
            let {email, password} = value
    
            email.trim();
            password.trim();
    
            let data =  await handler(email,password);
            if (data.message){
                changeValues({ email: value.email, password:'',})
                setErr([{message:data.message}])
                return;
            }
            navigate('/')
        }

        let registerSubmitHandler = async (e) => {
            e.preventDefault();
            let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            let errs = [];

            if (value.email.trim() == '' || value.password.trim() == ''){
                errs.push({message:"All fields are required!"})
            }
            if(!pattern.test(value.email.trim())){
                errs.push({message:"You have to type a valid email!"})
            }
            if(value.password.trim().length < 4){
                errs.push({message:'Your password must be at least 4 symbols long!'})
            }
            if(value.password.trim() != value.repass.trim()){
                errs.push({message:'Your passwords should match!'})
            }
    
            if(errs.length > 0){
                changeValues({email: value.email, password:'', repass : ''})
                setErr(errs);
                return;
            }
            let {email,password} = value;
    
            email.trim();
            password.trim();
    
            let data = await handler(email,password);
    
            if (data.message){
                changeValues({email: value.email, password:'', repass : ''})
                setErr([{message:data.message}])
                return;
            }
    
            
            navigate('/')
        }

        let searchSubmitHandler = async (e) => {
            e.preventDefault();

            let result = await getCertainCar(value.search);
            dataSetter(result);
            changeValues({search:``});
    
        }
    
        let divKill = (e) => {
            setErr([]);
        }
    
        return {
            err,
            listSubmitHandler,
            ediSubmitHandler,
            loginSubmitHandler,
            registerSubmitHandler,
            searchSubmitHandler,
            divKill
        }
    }