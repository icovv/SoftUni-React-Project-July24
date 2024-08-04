import styles from "./Search.module.css"
import SearchItem from "./search-single-item/SearchItem";
import useFetchSearchData from "./useFetchSearchData";
import useForm from "../../hooks/useForm";
import useHandleSubmit from "../../hooks/useHandleSubmit";
import handler from "./handler";

export default function Search() {

    let { value, changeHandler, changeValues } = useForm({
        search: ``,
        dropdown: ``
    })

    let { loading, data, dataSetter,dataReloader,isLoadingChanger } = useFetchSearchData()

    let { searchSubmitHandler,err,divKill, } = useHandleSubmit(value, null, changeValues, null, dataSetter);

    let {clearHandler} = handler(dataReloader, changeValues, isLoadingChanger);

    return (
            <main>
                <div className={styles["error-container"]}>
                {err.length > 0
                    ?
                    err.map(item => <div key={item.message} className={styles["error-message"]} id="error-message" onAnimationEnd={divKill}>{item.message}</div>)
                    :
                    <></>
                }
                 </div>
                <form className={styles['example']} onSubmit={searchSubmitHandler}>
                    <input type="text" placeholder="Search..." name="search" value={value.search || ''} onChange={changeHandler}></input>
                    <button type="submit" className={styles['button']} >Search</button>
                    <button type="submit" className={styles['clearButton']} onClick={clearHandler} >Clear</button>
                    <select className={styles["dropdown"]} name='dropdown' value={value.dropdown || ``} onChange={changeHandler}>
                        <option value="">---</option>
                        <option value="carBrand">Brand</option>
                        <option value="carModel">Model</option>
                        <option value="horsePowerMore">More HP</option>
                        <option value="horsePowerLess">Less HP</option>
                    </select>
                </form>
                {loading == true
                ?
                <div className={styles["loader"]}></div>
                :
                data.length > 0
                    ?
                    data.map(item => <SearchItem key={item._id} car={item}></SearchItem>)
                    :
                   <h2 style={{ marginLeft: "22em", marginTop: "5em", fontSize: "30px" }}>There are no such cars currently</h2>
                }
            </main>
    )
}