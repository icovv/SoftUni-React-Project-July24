import styles from './Register.module.css'

export default function Register(){
    return(
        <main>
            <div className={styles["register-form"]}>
                <h1 >Registration Form</h1>
                <form className= {styles["register-form-form"]}action="#" method="">
                    <label className={styles["register-form-label"]}>Email</label>
                    <input className={styles["register-form-input"]} type="text" name="" ></input>
                    <label className={styles["register-form-label"]}>Password</label>
                    <input className={styles["register-form-input"]} type="password" name="" ></input>
                    <label className={styles["register-form-label"]}>Repeat Password</label>
                    <input className={styles["register-form-input"]} type="password" name="" ></input>
                    <input className={styles["register-form-input"]} type="submit" value="Submit"></input>
                </form>
            </div>
            <div className={styles["no-acc-box"]}>
                <h1 className={styles["no-acc"]}>Already have an account?<a href="/login.html" className={styles["anchr"]}>Login here</a></h1>
            </div>
        </main>
    )
}