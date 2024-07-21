import styles from './Home.module.css'
import background from '../../../public/images/nackground.jpg'
import { useEffect } from 'react'


export default function Home() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url(${background})`
    },[])
    return (
        <main>
        <div className= {styles['home-text']}>
            <h1>Best Car Parts Store</h1>
            <a href="/catalog" className={styles['catalog-btn']}>Catalog</a>
        </div>
        </main>
    )
}