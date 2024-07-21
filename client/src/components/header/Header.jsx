import styles from "./Header.module.css"

export default function Header(){
    return(
        <header>
        <div className={styles.Header}>
           <img src="/images/10150.png" href="/" className={styles.logo}></img> 
         <ul className={styles.Menu}>
          <li><a href="/">Home</a></li>
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/listItem">Sell new Item</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/logout">Logout</a></li>
         </ul>
         <div className={styles.clear}></div>
        </div>
       </header>
    )
}