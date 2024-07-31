import { useEffect, useState } from "react"
import styles from "./Search.module.css"
import SearchItem from "./search-single-item/SearchItem";
import { getAllCars, getCertainCar } from "../../api/carsService";

export default function Search() {
    let [data, setData] = useState([]);
    let [loading,setIsLoading] = useState(true);
    let [value,setValue] = useState(``);
    useEffect(()=> {
        async function takeInitialData(){
           let data = await getAllCars();
            setData(data);
            setIsLoading(false);
        }
        takeInitialData();

    }, [])
    let changeHandler = (e) => {
        setValue([e.target.name] = e.target.value);
    }
    let submitHandler = async (e) => {
        e.preventDefault();
            let result = await getCertainCar(value);
            setData(result);
            setValue(``);

    }
    return (
        loading == true 
        ?
        <div className={styles["loader"]}></div>
        :
        <main>
            <form className={styles['example']} onSubmit={submitHandler}>
                <input type="text" placeholder="Search.." name="search" value={value} onChange={changeHandler}></input>
                <button type="submit" className={styles['button']} >Search</button>
              </form>
            
            {data.length > 0 
            ?
            data.map(item =><SearchItem key={item._id} car = {item}></SearchItem>)
            :
            <h2 style={{marginLeft: "490px", marginTop:"150px", fontSize:"30px"}}>There are no such cars currently</h2>
             }
        </main>
    )
}