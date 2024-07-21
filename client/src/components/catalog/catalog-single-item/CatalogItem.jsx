import styles from './CatalogItem.module.css'

export default function CatalogItem(
    {
       part
    }
){
    return(
        <div className={styles.card}>
        <img src={part.imageURL} alt="Car Part" style={{width:"100%", maxHeight: "200px", minHeight: "200px"}}></img>
        <h1 style={{color:"black"}}>{part.type}</h1>
        <h3 style={{color:"black"}}>Car Brand: {part.carBrand}</h3>
        <p className={styles.price}>${part.price}</p>
        <a href={`/details/${part._id}`}><button className={styles.button}>Details</button></a>
      </div>
    )
}