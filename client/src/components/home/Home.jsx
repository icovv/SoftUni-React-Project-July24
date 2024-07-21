import styles from './Home.module.css'
import background from '/images/nackground.jpg'
import { useEffect } from 'react'


export default function Home() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url(${background})`
    },[])
    return (
        <main>
        <div className= {styles['home-text']}>
            <h1>Showcase your car parts</h1>
            <a href="/catalog" className={styles['catalog-btn-home']}>Catalog</a>
        </div>
        </main>
    )
}