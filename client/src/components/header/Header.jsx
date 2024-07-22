import { useContext } from "react"
import styles from "./Header.module.css"
import AuthContext from "../../context/AuthContext"

export default function Header() {
    let { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            <div className={styles.Header}>
                <a href="/" ><img src="https://static.vecteezy.com/system/resources/thumbnails/035/915/849/small/ai-generated-car-logo-isolated-no-background-ai-generated-free-png.png" className={styles.logo}></img></a>
                {isAuthenticated
                    ?
                    <ul className={styles.Menu}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/catalog">Catalog</a></li>
                        <li><a href="/listItem">List new Item</a></li>
                        <li><a href="/search">Search</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                    :
                    <ul className={styles.Menu}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/catalog">Catalog</a></li>
                        <li><a href="/search">Search</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                }
                <div className={styles.clear}></div>
            </div>
        </header>
    )
}