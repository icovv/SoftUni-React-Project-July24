import { useContext } from "react"
import styles from "./Header.module.css"
import AuthContext from "../../context/AuthContext"
import { Link } from 'react-router-dom'

export default function Header() {
    let { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            <div className={styles.Header}>
                <Link to="/" ><img src="https://static.vecteezy.com/system/resources/thumbnails/035/915/849/small/ai-generated-car-logo-isolated-no-background-ai-generated-free-png.png" className={styles.logo}></img></Link>
                {isAuthenticated
                    ?
                    <ul className={styles.Menu}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/listItem">List new Item</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                    :
                    <ul className={styles.Menu}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                }
                <div className={styles.clear}></div>
            </div>
        </header>
    )
}