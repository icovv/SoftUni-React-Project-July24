import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
export default function NotFound() {
    return (
        <main>
            <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" className={styles["errorImage"]}></img>
            <div className={styles["container"]}>
                <h1 className={styles['h1']}>Oops!</h1>
                <h2 className={styles['h2']}>Requested page not found!</h2>
                <div className={styles["button-container"]}>
                    <Link to='/catalog'> <button className={styles['button']}>Go to Catalog Page</button> </Link>
                </div>
            </div>
        </main>
    )
}