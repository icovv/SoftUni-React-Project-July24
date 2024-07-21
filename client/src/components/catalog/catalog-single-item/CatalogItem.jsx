import styles from './CatalogItem.module.css'

export default function CatalogItem(
    {
       car
    }
){
    return(
        <div className={styles.card}>
        <img src={car.imageURL} alt="Car Image" style={{width:"100%", maxHeight: "200px", minHeight: "200px"}}></img>
        <h1 style={{color:"black"}}>Brand: {car.carBrand}</h1>
        <h3 style={{color:"black"}}>Model: {car.carModel}</h3>
        <h3 style={{color:"black"}}>Horse Power: {car.horsePower}</h3>
        <a href={`/catalog/details/${car._id}`}><button className={styles.button}>Details</button></a>
      </div>
    )
}