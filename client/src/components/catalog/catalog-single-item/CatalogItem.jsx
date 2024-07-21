import styles from '../Catalog.module.css'

export default function CatalogItem(
    {
        
    }
){
    return(
        <div className={styles.card}>
        <img src="./images/10150.png" alt="Car Part" style={{width:"100%"}}></img>
        <h1 style={{color:"black"}}>Tailored Jeans</h1>
        <p className={styles.price}>$19.99</p>
        <p style={{color:"black"}}>Some text about the jeans..</p>
        <a href="#"><button className={styles.button}>Details</button></a>
      </div>
    )
}