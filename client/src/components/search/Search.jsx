import styles from "./Search.module.css"

export default function Search() {
    return (
        <main>
            <form className={styles.example} action="action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
            </form>
            <div className={styles.card}>
                <img src="./images/10150.png" alt="Car Part" style={{ width: "100%" }}></img>
                <h1 style={{ color: "black" }}>Tailored Jeans</h1>
                <p className={styles.price}>$19.99</p>
                <p style={{ color: "black" }}>Some text about the jeans..</p>
                <a href="#" ><button>Details</button></a>
            </div>
        </main>
    )
}