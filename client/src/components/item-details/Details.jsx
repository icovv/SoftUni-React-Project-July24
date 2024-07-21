import { useEffect, useState } from 'react'
import styles from './Details.module.css'
import { getOneCar } from '../../api/carsService';
import { useParams } from 'react-router-dom';

export default function Details(){
    let {itemID} = useParams();
    let [item, setItem] = useState({});
    useEffect(() => {
        async function getItem(){
            let data = await getOneCar(itemID);
            console.log(data);
            setItem(data);
        }
        getItem();
    },[])

    return(
        <main className={styles['main']}>
        <div className={styles["product-details"]}>
            <div className={styles["image-container"]}>
                <img src={item.imageURL} alt="Car Image"></img>
            </div>
            <div className={styles["details-content"]}>
                <h2 style={{color:"#857776"}}><strong>{item.carBrand}</strong> </h2>
                <p style={{color:'black'}}><strong>Model:</strong> {item.carModel}</p>
                <p style={{color:'black'}}><strong>Year:</strong> {item.year}</p>
                <p style={{color:'black'}}><strong>Engine Capacity:</strong> {item.engineCapacity}</p>
                <p style={{color:'black'}}><strong>Horse Power:</strong> {item.horsePower}</p>
                <p style={{color:'black'}}><strong>Fuel: </strong> {item.fuelType}</p>
                <p style={{color:'black'}}><strong>Color: </strong> {item.color}</p>
                <p style={{color:'black'}}><strong>Description:</strong> {item.description}</p>
                <div className={styles["buttons"]}>
                    <button className={styles["edit-btn"]}>Edit</button>
                    <button className={styles["delete-btn"]}>Delete</button>
                    <button className={styles["like-btn"]}>Like</button>
                </div>
                <p style={{color:"#857776", marginTop: "30px"}}> Current Number of Likes: </p>
            </div>
        </div>
    </main>
    )
}