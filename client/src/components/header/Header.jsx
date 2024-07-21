import styles from "./Header.module.css"

export default function Header(){
    return(
        <header>
        <div className={styles.Header}>
           <img src="/images/10150.png" href="/" className={styles.logo}></img> 
         <ul className={styles.Menu}>
          <li><a href="/">Home</a></li>
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="">Sell new Item</a></li>
          <li><a href="">Search</a></li>
          <li><a href="">Profile</a></li>
          <li><a href="">Register</a></li>
          <li><a href="">Login</a></li>
          <li><a href="">Logout</a></li>
         </ul>
         <div className={styles.clear}></div>
        </div>
       </header>
    )
}