import { Link } from 'react-router-dom'
import styles from './SearchItem.module.css'

export default function SearchItem(
    {
        car
    }
){
    return(
        <div className={styles.card}>
        <img src={car.imageURL} alt="Car Image" style={{width:"100%", maxHeight: "200px", minHeight: "200px", maxWidth: "250px", minWidth: "250px"}}></img>
        <h1 style={{color:"black"}}>{car.carBrand}</h1>
        <h3 style={{color:"black"}}>Model: {car.carModel}</h3>
        <h3 style={{color:"black"}}>Horse Power: {car.horsePower}</h3>
        <Link to={`/catalog/details/${car._id}`}><button className={styles.button}>Details</button></Link>
      </div>
    )
}