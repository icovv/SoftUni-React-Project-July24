import { useEffect, useState } from 'react'
import styles from './Catalog.module.css'
import { getAllParts } from '../../api/partsService';
import CatalogItem from './catalog-single-item/CatalogItem';

export default function Catalog(){
    let [parts,setParts] = useState([]);
    useEffect(() => {
        async function getParts(){
            let parts = await getAllParts();
            console.log(parts)
            setParts(parts);
        }
        getParts();
    },[]);

    return(
        <main>
        <h1 className={styles.header}>All listed car parts</h1>
        {parts.length > 0 
        ?
        parts.map(item => <CatalogItem key={item._id} ></CatalogItem>)
        :
        <h2>There are no listed items</h2>
        }
        </main>
    )
}