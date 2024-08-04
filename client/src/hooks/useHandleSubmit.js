import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {editItem, getCertainCar, listItem } from '../api/carsService'
import useErrorHandler from "./useErrorsHandler";

export default function useHandleSubmit(value, itemID,changeValues, handler, dataSetter,isLoadingChanger){
        let [err, setErr] = useState([]);
        let navigate = useNavigate();
    
        let listSubmitHandler = async (e) => {
            e.preventDefault();
            let {errors,items} = useErrorHandler(value)
            if (errors.length > 0){
                setErr(errors);
                return;
            }
            items.likes = [];
            isLoadingChanger(true);
            let response = await listItem(items);
            if(response.message){
                setErr([{message: response.message}]);
                return;
            }
            navigate('/catalog');
    
        }

        let ediSubmitHandler = async (e) => {
            e.preventDefault();
            console.log(value);
            let {errors,items} = useErrorHandler(value)
            
            if (errors.length > 0){
                setErr(errors);
                return;
            }

            items.likes = value.likes;
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
            let search = value.search.trim();
            let dropdown = value.dropdown.trim()

            let pattern = /\d+/
            if (dropdown == ``){
                setErr([{message: 'Please select search criteria!'}]);
                return;
            }
            if (!pattern.test(search) && dropdown == `horsePowerLess`){
                setErr([{message: 'Please provide valid horse power!'}]);
                return;
            }
            if (!pattern.test(search) && dropdown == `horsePowerMore`){
                setErr([{message: 'Please provide valid horse power!'}]);
                return;
            }
            if (pattern.test(search) && dropdown == `carModel`){
                setErr([{message: 'Please provide valid car model!'}]);
                return;
            }
            if (pattern.test(search) && dropdown == `carBrand`){
                setErr([{message: 'Please provide valid car brand!'}]);
                return;
            }
            let result = await getCertainCar(search,dropdown);
            dataSetter(result);
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