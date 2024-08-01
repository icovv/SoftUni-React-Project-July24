import useForm from '../../hooks/useForm'
import useHandleSubmit from '../../hooks/useHandleSubmit';
import styles from './List.module.css'

export default function List() {
    let { value, changeHandler } = useForm({
        brand: "",
        year: "",
        model: "",
        capacity: "",
        power: "",
        fuel: "",
        color: "",
        image: "",
        description: "",
    });
    let {err,listSubmitHandler, divKill} = useHandleSubmit(value);
   

    return (
        <main className={styles.main}>
            <div className={styles["error-container"]}>
                {err.length > 0
                    ?
                    err.map(item => <div key={item.message} className={styles["error-message"]} id="error-message" onAnimationEnd={divKill}>{item.message}</div>)
                    :
                    <></>
                }
            </div>
            <div className={styles["form-container"]}>
                <h1 className={styles.header}>List your Car</h1>
                <form id="create-item-form" onSubmit={listSubmitHandler}>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-brand">Car Brand</label>
                        <input type="text" id="brand" name="brand" value={value.brand || ``} onChange={changeHandler} required ></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name="year" value={value.year || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-model">Car Model</label>
                        <input type="text" id="model" name="model" value={value.model || ``} onChange={changeHandler} required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="engine-capacity">Engine Capacity</label>
                        <input type="number" id="capacity" name="capacity" value={value.capacity || ``} onChange={changeHandler} required ></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-power">Horse Power</label>
                        <input type="number" id="power" name="power" value={value.power || ``} onChange={changeHandler} required></input>
                    </div>
                    <div >
                        <label htmlFor="fuel-type" >Fuel Type</label>
                        <select style={{ marginBottom: "15px" }} id="fuel" name="fuel" value={value.fuel || ``} onChange={changeHandler} required >
                            <option value="">---</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" name="color" value={value.color || ``} onChange={changeHandler} required ></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="image-link">Image URL</label>
                        <input type="url" id="image" name="image" value={value.image || ``} onChange={changeHandler} required ></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="4" value={value.description || ``} onChange={changeHandler} required ></textarea>
                    </div>
                    <button type="submit" className={styles.button}>List</button>
                </form>
            </div>

        </main>
    )
}