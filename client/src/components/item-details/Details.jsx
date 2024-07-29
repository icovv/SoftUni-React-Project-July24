import { useContext, useEffect, useState } from 'react'
import styles from './Details.module.css'
import { deleteCar, getOneCar } from '../../api/carsService';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

export default function Details(){
    let {itemID} = useParams();
    let {id} = useContext(AuthContext);
    let [item, setItem] = useState({});
    let navigate = useNavigate();
    useEffect(() => {
        async function getItem(){
            let data = await getOneCar(itemID);
            setItem(data);
        }
        getItem();
    },[])
    let deleteItem = async () => {
        if (confirm('Are you sure you want to delete this car?')){
            await deleteCar(itemID);
            navigate('/catalog')
        };
    }
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
                    <a href= {`edit/${item._id}`} ><button className={styles["edit-btn"]}>Edit</button></a>
                    <a ><button className={styles["delete-btn"]} onClick={deleteItem}>Delete</button></a>
                    <a ><button className={styles["like-btn"]}>Like</button> </a>
                </div>
                <p style={{color:"#857776", marginTop: "30px"}}> Current Number of Likes:  </p>
            </div>
        </div>
    </main>
    )
}