import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLikesForCar, listItem } from '../../api/carsService';


export default function handleSubmit(value){
    let [err, setErr] = useState([]);
    let navigate = useNavigate();

    let submitHandler = async (e) => {
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
        //     {
        //         "year": "2010",
        //         "carBrand": "Toyota",
        //         "carModel": "Camry",
        //         "engineCapacity": "1600",
        //         "fuelType": "Diesel",
        //         "horsePower": "100",
        //         "color": "Grey",
        //         "description": "The most reliable car.",
        //         "likes": ["847ec027-f659-4086-8032-5173e2f9c93a"],
        //         "imageURL": "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/309572/2010_toyota_camry_angularfront.jpg"
        // }


    }

    let divKill = (e) => {
        setErr([]);
    }

    return {
        err,
        submitHandler,
        divKill
    }
}