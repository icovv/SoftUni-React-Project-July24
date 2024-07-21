import styles from './List.module.css'

export default function List() {
    return (
        <main className={styles.main}>

            <div className={styles["form-container"]}>
                <h1 className={styles.header}>List your Car</h1>
                <form id="create-item-form">
                    <div className={styles['form-group']}>
                        <label htmlFor="car-brand">Car Brand</label>
                        <input type="text" id="brand" name="brand" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name="year" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-model">Car Model</label>
                        <input type="text" id="model" name="model" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="engine-capacity">Engine Capacity</label>
                        <input type="number" id="capacity" name="capacity" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-power">Horse Power</label>
                        <input type="number" id="power" name="power" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="fuel-type">Fuel Type</label>
                        <input type="text" id="fuel" name="fuel" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" name="color" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="image-link">Image URL</label>
                        <input type="url" id="image" name="image" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="4" required></textarea>
                    </div>
                    <button type="submit" className={styles.button}>List</button>
                </form>
            </div>

        </main>
    )
}