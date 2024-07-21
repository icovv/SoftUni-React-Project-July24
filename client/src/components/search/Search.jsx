import { useEffect, useState } from "react"
import styles from "./Search.module.css"
import SearchItem from "./search-single-item/SearchItem";
import { getAllCars } from "../../api/carsService";

export default function Search() {
    let [data, setData] = useState([]);
    useEffect(() => {
        async function getCars(){
            let data = await getAllCars();
            console.log(data)
            setData(data);
        }
        getCars();
    },[]);
    return (
        <main>
            <form className={styles.example} action="action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
            </form>
            {data.length > 0 
            ?
            data.map(item =><SearchItem key={item._id} car = {item}></SearchItem>)
            :
            <h2>There are no listed items</h2>
             }
        </main>
    )
}