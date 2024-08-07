import styles from './Catalog.module.css'
import CatalogItem from './catalog-single-item/CatalogItem';
import useFetchCatalogData from './useFetchCatalogData';

export default function Catalog(){

    let {loading,cars} = useFetchCatalogData()
    
    return(
        loading == true
        ?
        <div className={styles["loader"]}></div>
        :
        <main>
        <h1 className={styles.header}>All listed cars</h1>
        {cars.length > 0 
        ?
        cars.map(car => <CatalogItem key={car._id} car={car} ></CatalogItem>)
        : 
        <h2 style={{marginLeft: "46em",marginTop:"10em"}}>There are no listed items</h2>
        }
        </main>
    )
}