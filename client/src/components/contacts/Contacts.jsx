import styles from './Contacts.module.css'

export default function Contacts(){
    return(
        <main className={styles[`main`]}>
        <h1 className={styles[`h1`]}>Where to find us?</h1>
        <div className={styles["contact-container"]}>
            <div className={styles["contact-info"]}>
                <h2>Contact Information</h2>
                <p><strong>Address:</strong> American collegeMladost, Aleksandar Malinov Boulevard 78, Sofia, Bulgaria</p>
                <p><strong>Phone:</strong> +359 12 3456789</p>
                <p><strong>Email:</strong> contact@company.com</p>
                <h2><strong>Working Hours</strong></h2>
                <p><strong>Monday to Friday:</strong> 9:00 - 19:30 </p>
                <p><strong>Saturday and Sunday:</strong> Days Off </p>
            </div>
            <div className={styles["map-container"]}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5870.375468623991!2d23.364927685680254!3d42.636179896828864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cb55668ae1%3A0x447f9dd693e57def!2sSoftware%20University!5e0!3m2!1sen!2sus!4v1722683575443!5m2!1sen!2sus"
                    width={600}
                    height={400}
                    style={{border:0}}
                    allowFullScreen= ''
                    loading='lazy'
                >
                </iframe>
            </div>
        </div>
    </main>
    )
}