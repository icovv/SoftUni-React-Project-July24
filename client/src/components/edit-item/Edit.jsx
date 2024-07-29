import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import styles from './Edit.module.css'
import { useEffect, useState } from 'react';
import { editItem, getOneCar } from '../../api/carsService';

export default function List() {
    let {itemID} = useParams();
    let [err, setErr] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        async function getItem(){
            let data = await getOneCar(itemID);
            changeValues({
                brand: data.carBrand,
                year: data.year,
                model: data.carModel,
                capacity: data.engineCapacity,
                power: data.horsePower,
                fuel: data.fuelType,
                color: data.color,
                image: data.imageURL,
                description: data.description,
            });
            console.log(data);
        }
        getItem();
    },[])
    let {value,changeHandler,changeValues} = useForm('edit', {
        brand: '',
        year: '',
        model: '',
        capacity: '',
        power: '',
        fuel: '',
        color: '',
        image: '',
        description: '',
    })

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

    return (
        <main className={styles.main}>
             <div className={styles["error-container"]}>
                {err.length > 0
                    ?
                    err.map(item => <div key={item.message} className={styles["error-message"]} id="error-message" onAnimationEnd={divKill}>{item.message}</div>)
                    :
                    <></>
                }
            </div>
            <div className={styles["form-container"]}>
                <h1 className={styles.header}>Edit your Car</h1>
                <form id="create-item-form" onSubmit={submitHandler}>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-brand">Car Brand</label>
                        <input type="text" id="brand" name="brand" value={value.brand || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name="year" value={value.year || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-model">Car Model</label>
                        <input type="text" id="model" name="model" value={value.model || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="engine-capacity">Engine Capacity</label>
                        <input type="number" id="capacity" name="capacity" value={value.capacity || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-power">Horse Power</label>
                        <input type="number" id="power" name="power" value={value.power || ``} onChange={changeHandler} required></input>
                    </div>
                    <div >
                        <label htmlFor="fuel-type" >Fuel Type</label>
                        <select style={{marginBottom: "15px"}} id="fuel" name="fuel" value={value.fuel} onChange={changeHandler} required>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" name="color" value={value.color || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="image-link">Image URL</label>
                        <input type="url" id="image" name="image" value={value.image || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" value={value.description || ``} onChange={changeHandler} rows="4" required></textarea>
                    </div>
                    <button type="submit" className={styles.button}>Edit</button>
                </form>
            </div>

        </main>
    )
}