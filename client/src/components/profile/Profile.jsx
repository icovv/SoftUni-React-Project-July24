import styles from './Profile.module.css'

export default function Profile(){
    return(
        <main className={styles.main}>
        <div className={styles["profile-container"]}>
            <div className={styles['profile-info']}>
                <div className={styles["profile-picture"]}>
                    <img src="/images/profile-circle-icon-2048x2048-cqe5466q.png" alt="Profile Picture"></img>
                </div>
                <div className={styles["profile-email"]}>
                    <label>Email:</label>
                    <span style={{color:'black'}}><strong>user@example.com</strong></span>
                </div>
            </div>
        </div>
        <div className={styles["products-container"]}>
            <section className={styles["product-section"]}>
                <h2>Listed Products</h2>
                <div className={styles["product"]}>
                    <h3 className={styles['h3']}>Mercedes</h3>
                    <p className={styles['p']}><strong>Model:</strong> C220</p>
                    <p className={styles['p']}><strong>Color:</strong> Grey</p>
                    <button className={styles["details-btn"]}>Details</button>
                </div>
                <div className={styles["product"]}>
                    <h3 className={styles['h3']}>Mercedes</h3>
                    <p className={styles['p']}><strong>Model:</strong> C220</p>
                    <p className={styles['p']}><strong>Color:</strong> Grey</p>
                    <button className={styles["details-btn"]}>Details</button>
                </div>
            </section>
            <section className={styles["product-section"]}>
                <h2>Liked Products</h2>
                <div className={styles["product"]}>
                    <h3 className={styles['h3']}>BMW</h3>
                    <p className={styles['p']}><strong>Model:</strong> Third Series</p>
                    <p className={styles['p']}><strong>Color:</strong> Black</p>
                    <button className={styles["details-btn"]}>Details</button>
                </div>                
                <div className={styles["product"]}>
                    <h3 className={styles['h3']}>BMW</h3>
                    <p className={styles['p']}><strong>Model:</strong> Third Series</p>
                    <p className={styles['p']}><strong>Color:</strong> Black</p>
                    <button className={styles["details-btn"]}>Details</button>
                </div>                               
            </section>
        </div>
    </main>
    )
}