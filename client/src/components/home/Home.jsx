import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import background from '/images/nackground.jpg'
import { useEffect } from 'react'


export default function Home() {
    // useEffect(()=>{
    //     document.body.style.backgroundImage = `url(${background})`
    // },[])
    return (
        <main style={{backgroundImage:`url(${background})`, position: 'fixed', backgroundSize:'cover', width: "100%", height: "100%"}}>
        <div className= {styles['home-text']} >
            <h1>Show us your car</h1>
            <Link to="/catalog" className={styles['catalog-btn-home']}>Catalog</Link>
        </div>
        </main>
    )
}