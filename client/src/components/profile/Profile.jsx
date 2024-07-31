import { useContext, useEffect, useState } from 'react'
import styles from './Profile.module.css'
import AuthContext from '../../context/AuthContext'
import ProfileListed from './profile-listed-products/ProfileListed';
import { getAllCreatedCarsByUser, getAllLikedCarsByUser } from '../../api/carsService';
import ProfileLiked from './profile-liked-products/ProfileLiked';


export default function Profile(){
    let {id, email} = useContext(AuthContext);
    let [cars,setCars] = useState({listed:[],liked:[]});
    let [loading, setIsLoading] = useState(true);
    useEffect(()=> {
        async function getCreatedCars(){
            let listed = await getAllCreatedCarsByUser(id);
            let liked = await getAllLikedCarsByUser(id);
            setCars({listed:listed, liked:liked});
            setIsLoading(false);
        }
        getCreatedCars();
    },[])
    return(
        loading == true 
        ?
        <main className={styles.main}>
        <div className={styles["profile-container"]}>
            <div className={styles['profile-info']}>
                <div className={styles["profile-picture"]}>
                    <img src="/images/profile-circle-icon-2048x2048-cqe5466q.png" alt="Profile Picture"></img>
                </div>
                <div className={styles["profile-email"]}>
                    <label>Email:</label>
                    <span style={{color:'black'}}><strong>{email}</strong></span>
                </div>
            </div>
        </div>
        <div className={styles["products-container"]}>
            <section className={styles["product-section"]}>
                <h2>Listed Products</h2>
                <div className={styles["loader"]}></div>
                </section>
            <section className={styles["product-section"]}>
                <h2>Liked Products</h2>
                <div className={styles["loader"]}></div>
                </section>
        </div>
        </main>

        :
        <main className={styles.main}>
        <div className={styles["profile-container"]}>
            <div className={styles['profile-info']}>
                <div className={styles["profile-picture"]}>
                    <img src="/images/profile-circle-icon-2048x2048-cqe5466q.png" alt="Profile Picture"></img>
                </div>
                <div className={styles["profile-email"]}>
                    <label>Email:</label>
                    <span style={{color:'black'}}><strong>{email}</strong></span>
                </div>
            </div>
        </div>
        <div className={styles["products-container"]}>
            <section className={styles["product-section"]}>
                <h2>Listed Products</h2>
                {cars.listed.length >0
                ? 
                cars.listed.map(item =><ProfileListed key={item._id} car = {item}></ProfileListed>)
                :
                <h3 style={{marginLeft: "45px", marginTop: "90px", fontSize: "20px"}}> There are no Listed Cars! </h3>
                }
            </section>
            <section className={styles["product-section"]}>
                <h2>Liked Products</h2>
                {cars.liked.length>0
                ?
                cars.liked.map(item => <ProfileLiked key={item.carID} carID = {item.carID}></ProfileLiked>)
                :
                <h3 style={{marginLeft: "45px", marginTop: "90px", fontSize: "20px"}}> There are no Liked Cars! </h3>
                }
            </section>
        </div>
    </main>
    )
}