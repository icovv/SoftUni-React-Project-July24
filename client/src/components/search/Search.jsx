import styles from "./Search.module.css"

export default function Search() {
    return (
        <main>
            <form className={styles.example} action="action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
            </form>
            <div className={styles.card}>
                <img src="https://images.hgmsites.net/hug/2010-bmw-3-series-4-door-sedan-328i-rwd-angular-front-exterior-view_100237108_h.jpg" alt="Car Image" style={{ width: "100%", maxHeight: "200px", minHeight: "200px" }}></img>
                <h1 style={{ color: "black" }}>Brand: Car Brand</h1>
                <h3 style={{ color: "black" }}>Model: Car Model</h3>
                <h3 style={{ color: "black" }}>Horse Power: Car HorsePower</h3>
                <a href={`#`}><button className={styles.button}>Details</button></a>
            </div>
        </main>
    )
}