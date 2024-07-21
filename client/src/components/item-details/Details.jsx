import { useEffect, useState } from 'react'
import styles from './Details.module.css'
import { getOneItem } from '../../api/partsService';
import { useParams } from 'react-router-dom';

export default function Details(){
    let {itemID} = useParams();
    let [item, setItem] = useState({});
    useEffect(() => {
        async function getItem(){
            let data = await getOneItem(itemID);
            console.log(data);
            setItem(data);
        }
        getItem();
    },[])

    return(
        <main className={styles['main']}>
        <div className={styles["product-details"]}>
            <div className={styles["image-container"]}>
                <img src={item.imageURL} alt="Engine"></img>
            </div>
            <div className={styles["details-content"]}>
                <h2 style={{color:"#857776"}}>{item.type}</h2>
                <p style={{color:'black'}}><strong>Car Brand:</strong> {item.carBrand}</p>
                <p style={{color:'black'}}><strong>Year:</strong> {item.year}</p>
                <p style={{color:'black'}}><strong>Car Model:</strong> {item.carModel}</p>
                <p style={{color:'black'}}><strong>Engine Capacity:</strong> {item.engineCapacity}</p>
                <p style={{color:'black'}}><strong>Price: </strong> {item.price}$</p>
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