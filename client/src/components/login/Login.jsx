import styles from "./Login.module.css"

export default function Login(){
    return(
        <main className={styles["main"]}>
        <div className={styles["login-form"]}>
            <h1>Login Form</h1>
            <form className={styles["form"]} action="#" method="">
                <label className={styles["label"]}>Email</label>
                <input className={styles["input"]} type="text" name=""></input>
                <label className={styles["label"]}>Password</label>
                <input className={styles["input"]} type="password" name=""></input>
                <input className={styles["input"]} type="submit" value="Submit"></input>
            </form>
        </div>
        <div className={styles["no-acc-box"]}>
            <h1 className={styles["no-acc"]}>New to our store?<a href="/register.html" className={styles["anchr"]}>Register here</a> </h1>
        </div>
    </main>
    )
}