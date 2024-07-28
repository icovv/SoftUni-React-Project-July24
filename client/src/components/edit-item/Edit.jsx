import { useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import styles from './Edit.module.css'
import { useEffect, useState } from 'react';
import { getOneCar } from '../../api/carsService';

export default function List() {
    let {itemID} = useParams();

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

    let submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <main className={styles.main}>

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