import { useEffect, useState } from 'react'
import styles from '../Profile.module.css'
import { getOneCar } from '../../../api/carsService';


export default function ProfileLiked({
    carID
}) 
{
    let [car, setCar] = useState([]);
    useEffect(() => {
        async function getCar(){
            let data = await getOneCar(carID);
            console.log(data);
            setCar(data);
        }
        getCar();
    })   
    return (
        <div className={styles["product"]}>
            <h3 className={styles['h3']}>{car.carBrand}</h3>
            <p className={styles['p']}><strong>Model:</strong> {car.carModel}</p>
            <p className={styles['p']}><strong>Color:</strong> {car.color}</p>
            <a href={`/catalog/details/${carID}`}><button className={styles["details-btn"]}>Details</button></a>
        </div>
    )
}