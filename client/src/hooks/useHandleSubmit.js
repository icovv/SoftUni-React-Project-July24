import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createLikesForCar, editItem, listItem } from '../api/carsService'

export default function useHandleSubmit(value, itemID){
        let [err, setErr] = useState([]);
        let navigate = useNavigate();
    
        let listSubmitHandler = async (e) => {
            e.preventDefault();
    
            let urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    
            let brand = value.brand.trim();
            let year = value.year.trim();
            let model = value.model.trim();
            let capacity = value.capacity.trim();
            let power = value.power.trim();
            let fuel = value.fuel.trim();
            let color = value.color.trim();
            let image = value.image.trim();
            let description = value.description.trim();
    
            let errors = []
            if (brand == '' || year == '' || model == '' || capacity == '' || power == '' || fuel == '' || color == '' || image == '' || description == '') {
                errors.push({ message: "All fields are required!" });
    
            }
            if (year < 1886) {
                errors.push({ message: "Please make sure to provide valid year of the vehicle! (Oldest created car was in 1886)" });
    
            }
            if (capacity < 0) {
                errors.push({ message: "Please make sure to provide a valid engine capacity!" });
    
            }
            if (power < 0) {
                errors.push({ message: "Please make sure to provide a valid horse power!" });
    
            }
            if (!(typeof color == "string")) {
                errors.push({ message: "Please make sure to provide a valid color!" });
            }
            if (!(fuel == "Diesel" || fuel == 'Petrol')) {
                errors.push({ message: "Please make sure to provide a fuel type from the listed ones!" });
    
            }
            if (!urlPattern.test(image)) {
                errors.push({ message: "Please make sure to provide a valid url!" });
    
            }
            if (description.length < 5) {
                errors.push({ message: "The description is too short!" });
    
            }
            if (errors.length > 0) {
                setErr(errors);
                return;
            }
            let items = {
                "year": year,
                "carBrand": brand,
                "carModel": model,
                "engineCapacity": capacity,
                "fuelType": fuel,
                "horsePower": power,
                "color": color,
                "description": description,
                "imageURL": image,
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
    
            let urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    
            let brand = value.brand.trim();
            let year = value.year.trim();
            let model = value.model.trim();
            let capacity = value.capacity.trim();
            let power = value.power.trim();
            let fuel = value.fuel.trim();
            let color = value.color.trim();
            let image = value.image.trim();
            let description = value.description.trim();
    
            let errors = []
            if (brand == '' || year == '' || model == '' || capacity == '' || power == '' || fuel == '' || color == '' || image == '' || description == '') {
                errors.push({ message: "All fields are required!" });
    
            }
            if (year < 1886) {
                errors.push({ message: "Please make sure to provide valid year of the vehicle! (Oldest created car was in 1886)" });
    
            }
            if (capacity < 0) {
                errors.push({ message: "Please make sure to provide a valid engine capacity!" });
    
            }
            if (power < 0) {
                errors.push({ message: "Please make sure to provide a valid horse power!" });
    
            }
            if (!(typeof color == "string")) {
                errors.push({ message: "Please make sure to provide a valid color!" });
            }
            if (!(fuel == "Diesel" || fuel == 'Petrol')) {
                errors.push({ message: "Please make sure to provide a fuel type from the listed ones!" });
    
            }
            if (!urlPattern.test(image)) {
                errors.push({ message: "Please make sure to provide a valid url!" });
    
            }
            if (description.length < 5) {
                errors.push({ message: "The description is too short!" });
    
            }
            if (errors.length > 0) {
                setErr(errors);
                return;
            }
    
            let items = {
                "year": year,
                "carBrand": brand,
                "carModel": model,
                "engineCapacity": capacity,
                "fuelType": fuel,
                "horsePower": power,
                "color": color,
                "description": description,
                "imageURL": image,
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