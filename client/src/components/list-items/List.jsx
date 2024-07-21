import styles from './List.module.css'

export default function List(){
    return(
        <main className={styles.main}>
            
            <div className={styles["form-container"]}>
                <h1 className={styles.header}>List your Car Part</h1>
                <form id="create-item-form">
                    <div className={styles['form-group']}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name="year" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-brand">Car Brand</label>
                        <input type="text" id="car-brand" name="car-brand" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="image-link">Image URL</label>
                        <input type="url" id="image-link" name="image-link" required></input>
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