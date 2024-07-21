import styles from './Home.module.css'

export default function Home() {
    return (
        <div className= {styles['home-text']}>
            <h1>Sell your old parts to those who will appreciate them</h1>
            <a href="" className={styles['catalog-btn']}>Catalog</a>
        </div>
    )
}