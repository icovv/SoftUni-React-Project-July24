import useForm from "../../hooks/useForm"
import styles from "./Login.module.css"

export default function Login(){
    let {value,changeHandler, submitHandler} = useForm('login',{
        email:'',
        password:''
    })
    return(
        <main className={styles["main"]}>
        <div className={styles["login-form"]}>
            <h1>Login Form</h1>
            <form className={styles["form"]} onSubmit={submitHandler}>
                <label className={styles["label"]}>Email</label>
                <input className={styles["input"]} type="text" name="email" value={value.email} onChange={changeHandler}></input>
                <label className={styles["label"]}>Password</label>
                <input className={styles["input"]} type="password" name="password" value={value.password} onChange={changeHandler}></input>
                <input className={styles["input"]} type="submit" value="Submit"></input>
            </form>
        </div>
        <div className={styles["no-acc-box"]}>
            <h1 className={styles["no-acc"]}>New to our store?<a href="/register" className={styles["anchr"]}>Register here</a> </h1>
        </div>
    </main>
    )
}