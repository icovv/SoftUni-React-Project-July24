import { useEffect, useState } from 'react'
import styles from '../Profile.module.css'
import { getOneCar } from '../../../api/carsService';
import { Link } from 'react-router-dom';


export default function ProfileLiked({
    car
}) 
{
  
    return (
        <div className={styles["product"]}>
            <h3 className={styles['h3']}>{car.carBrand}</h3>
            <p className={styles['p']}><strong>Model:</strong> {car.carModel}</p>
            <p className={styles['p']}><strong>Color:</strong> {car.color}</p>
            <Link to={`/catalog/details/${car._id}`}><button className={styles["details-btn"]}>Details</button></Link>
        </div>
    )
}