import styles from './Edit.module.css'

export default function Edit(){
    return(
        <main className={styles['main']}>
            <div className={styles["form-container"]}>
                <h1 className={styles["header"]}><strong>Edit your Car</strong></h1>
                <form id="create-item-form" className={styles['form']}>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="car-brand">Car Brand</label>
                        <input className= {styles["input"]}type="text" id="brand" name="brand" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="year">Year</label>
                        <input className= {styles["input"]}type="number" id="year" name="year" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-model">Car Model</label>
                        <input type="text" id="model" name="model" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-capacity">Engine Capacity</label>
                        <input type="number" id="capacity" name="capacity" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-power">Horse Power</label>
                        <input type="number" id="power" name="power" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-fuel">Fuel Type</label>
                        <input type="number" id="fuel" name="fuel" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="color">Color</label>
                        <input className= {styles["input"]}type="number" id="color" name="color" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="image-link">Image URL</label>
                        <input className= {styles["input"]}type="url" id="image" name="image" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="description">Description</label>
                        <textarea className={styles["textarea"]} id="description" name="description" rows="4" required></textarea>
                    </div>
                    <button type="submit" className={styles["button"]}>Edit</button>
                </form>
            </div>
        </main>
    )
}