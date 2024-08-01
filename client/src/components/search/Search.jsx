import { useEffect, useState } from "react"
import styles from "./Search.module.css"
import SearchItem from "./search-single-item/SearchItem";
import { getAllCars, getCertainCar } from "../../api/carsService";
import fetchSearchData from "./fetchSearchData";
import useForm from "../../hooks/useForm";
import useHandleSubmit from "../../hooks/useHandleSubmit";

export default function Search() {
    let {value,changeHandler, changeValues} = useForm({
        search: ``
    })

    let {loading,data, dataSetter} = fetchSearchData()

    let {searchSubmitHandler} = useHandleSubmit(value,null,changeValues,null,dataSetter);

    return (
        loading == true 
        ?
        <div className={styles["loader"]}></div>
        :
        <main>
            <form className={styles['example']} onSubmit={searchSubmitHandler}>
                <input type="text" placeholder="Search.." name="search" value={value.search || ''} onChange={changeHandler}></input>
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