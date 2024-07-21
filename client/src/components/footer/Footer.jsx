import styles from '../footer/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Logo}>The Best Car Comparison Website</div>

            <div className={styles.clear}></div>
        </footer>
    )
}