import styles from './Details.module.css'

export default function Details(){
    return(
        <main className={styles['main']}>
        <div className={styles["product-details"]}>
            <div className={styles["image-container"]}>
                <img src="/images/10150.png" alt="Engine"></img>
            </div>
            <div className={styles["details-content"]}>
                <h2 style={{color:"#857776"}}>Engine</h2>
                <p style={{color:'black'}}><strong>Year:</strong> 2023</p>
                <p style={{color:'black'}}><strong>Car Brand:</strong> Toyota</p>
                <p style={{color:'black'}}><strong>Price: </strong> 20$</p>
                <p style={{color:'black'}}><strong>Description:</strong> High-performance engine suitable for various car models.</p>
                <div className={styles["buttons"]}>
                    <button className={styles["edit-btn"]}>Edit</button>
                    <button className={styles["delete-btn"]}>Delete</button>
                    <button className={styles["like-btn"]}>Like</button>
                </div>
            </div>
        </div>
    </main>
    )
}