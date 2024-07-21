import { useEffect, useState } from 'react'
import styles from './Catalog.module.css'
import { getAllCars } from '../../api/carsService';
import CatalogItem from './catalog-single-item/CatalogItem';

export default function Catalog(){
    let [cars,setCars] = useState([]);
    useEffect(() => {
        async function getCars(){
            let data = await getAllCars();
            console.log(data)
            setCars(data);
        }
        getCars();
    },[]);

    return(
        <main>
        <h1 className={styles.header}>All listed cars</h1>
        {cars.length > 0 
        ?
        cars.map(car => <CatalogItem key={car._id} car={car} ></CatalogItem>)
        :
        <h2>There are no listed items</h2>
        }
        </main>
    )
}