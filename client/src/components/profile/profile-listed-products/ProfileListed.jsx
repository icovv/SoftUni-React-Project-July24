import styles from '../Profile.module.css'

export default function ProfileListed(
    {
        car
    }
) {

    return (
        <div className={styles["product"]}>
            <h3 className={styles['h3']}>{car.carBrand}</h3>
            <p className={styles['p']}><strong>Model:</strong> {car.carModel}</p>
            <p className={styles['p']}><strong>Color:</strong> {car.color}</p>
            <a href={`/catalog/details/${car._id}`}><button className={styles["details-btn"]}>Details</button></a>
        </div>
    )
}