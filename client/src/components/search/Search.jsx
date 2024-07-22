import { useEffect, useState } from "react"
import styles from "./Search.module.css"
import SearchItem from "./search-single-item/SearchItem";
import { getAllCars, getCertainCar } from "../../api/carsService";

export default function Search() {
    let [data, setData] = useState([]);

    let [value,setValue] = useState(``);
    useEffect(()=> {
        async function takeInitialData(){
           let data = await getAllCars();
            setData(data);
        }
        takeInitialData();
    }, [])
    let changeHandler = (e) => {
        setValue([e.target.name] = e.target.value);
    }
    let submitHandler = async (e) => {
        e.preventDefault();
            let result = await getCertainCar(value);
        if (result.length > 0){
            setData(result);
        }
    }
    return (
        <main>
            <form className={styles['example']} onSubmit={submitHandler}>
                <input type="text" placeholder="Search.." name="search" value={value} onChange={changeHandler}></input>
                <button type="submit" className={styles['button']} >Search</button>
              </form>
            
            {data.length > 0 
            ?
            data.map(item =><SearchItem key={item._id} car = {item}></SearchItem>)
            :
            <h2>There are no items currently!</h2>
             }
        </main>
    )
}