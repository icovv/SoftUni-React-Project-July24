import { useContext, useState, } from "react"
import useForm from "../../hooks/useForm"
import styles from "./Login.module.css"
import AuthContext from "../../context/AuthContext";
import { Link, } from "react-router-dom";
import useHandleSubmit from "../../hooks/useHandleSubmit";

export default function Login(){
    let {loginHandler} = useContext(AuthContext);
    let {value,changeHandler, changeValues} = useForm({
        email:'',
        password:''
    })
    let [loading, setIsLoading] = useState(false);
    let loadingFN = (value) => {setIsLoading(value)}
    let {err,loginSubmitHandler,divKill} = useHandleSubmit(value,null,changeValues,loginHandler,null,loadingFN); 
    // value,null,changeValues,loginHandler

    return(
        <main className={styles["main"]}>
            <div className={styles["error-container"]}>
            {err.length > 0 
            ?
            err.map(item => <div key={item.message} className={styles["error-message"]}id="error-message" onAnimationEnd={divKill}>{item.message}</div> )
            :
            <></>
            }
            </div>
        <div className={styles["login-form"]}>
            <h1>Login Form</h1>
            <form className={styles["form"]} onSubmit={loginSubmitHandler}>
                <label className={styles["label"]}>Email</label>
                <input className={styles["input"]} type="text" name="email" value={value.email || ''} onChange={changeHandler}></input>
                <label className={styles["label"]}>Password</label>
                <input className={styles["input"]} type="password" name="password" value={value.password || ''} onChange={changeHandler}></input>
                <input className={styles["input"]} type="submit" value="Submit" disabled={loading}></input>
            </form>
        </div>
        <div className={styles["no-acc-box"]}>
            <h1 className={styles["no-acc"]}>New to our site?<Link to="/register" className={styles["anchr"]}>Register here</Link> </h1>
        </div>
    </main>
    )
}