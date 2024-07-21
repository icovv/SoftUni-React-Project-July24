import styles from './Edit.module.css'

export default function Edit(){
    return(
        <main className={styles['main']}>
            <div className={styles["form-container"]}>
                <h1 className={styles["header"]}><strong>Edit your Car Part</strong></h1>
                <form id="create-item-form" className={styles['form']}>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="title">Title</label>
                        <input className= {styles["input"]}type="text" id="title" name="title" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="car-brand">Car Brand</label>
                        <input className= {styles["input"]}type="text" id="car-brand" name="car-brand" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="year">Year</label>
                        <input className= {styles["input"]}type="number" id="year" name="year" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-brand">Car Model</label>
                        <input type="text" id="car-brand" name="car-brand" required></input>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="car-brand">Engine Capacity</label>
                        <input type="number" id="car-brand" name="car-brand" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="price">Price</label>
                        <input className= {styles["input"]}type="number" id="price" name="price" required></input>
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles['label']} htmlFor="image-link">Image URL</label>
                        <input className= {styles["input"]}type="url" id="image-link" name="image-link" required></input>
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