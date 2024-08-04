import { useContext} from 'react'
import styles from './Profile.module.css'
import AuthContext from '../../context/AuthContext'
import ProfileListed from './profile-listed-products/ProfileListed';
import ProfileLiked from './profile-liked-products/ProfileLiked';
import useFetchProfileData from './useFetchProfileData';


export default function Profile(){
    let {id, email} = useContext(AuthContext);

    let {cars,loading} = useFetchProfileData(id);
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
                <h2>Listed Cars</h2>
                <div className={styles["loader"]}></div>
                </section>
            <section className={styles["product-section"]}>
                <h2>Liked Cars</h2>
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
                <h2>Listed Cars</h2>
                {cars.listed.length >0
                ? 
                cars.listed.map(item =><ProfileListed key={item._id} car = {item}></ProfileListed>)
                :
                <h3 style={{marginLeft: "45px", marginTop: "90px", fontSize: "20px"}}> There are no Listed Cars! </h3>
                }
            </section>
            <section className={styles["product-section"]}>
                <h2>Liked Cars</h2>
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