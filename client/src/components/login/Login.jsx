import { useContext, useState } from "react"
import useForm from "../../hooks/useForm"
import styles from "./Login.module.css"
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    let {loginHandler} = useContext(AuthContext);
    let [err, setErr] = useState([]);
    let navigate = useNavigate();
    let {value,changeHandler, changeValues} = useForm('login',{
        email:'',
        password:''
    })

    let submitHandler = async (e) => {
        e.preventDefault();
        if (value.email.trim() == '' || value.password.trim() == ''){
            changeValues({ email: value.email, password:'',})
            setErr([{message:"All fields are required!"}])
            return;
        }
        let {email, password} = value

        email.trim();
        password.trim();

        let data =  await loginHandler(email,password);
        if (data.message){
            changeValues({ email: value.email, password:'',})
            setErr([{message:data.message}])
            return;
            // return alert(data.message);
        }
        navigate('/')
    }
    let divKill = (e) => {
        setErr([]);
    }

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
            <form className={styles["form"]} onSubmit={submitHandler}>
                <label className={styles["label"]}>Email</label>
                <input className={styles["input"]} type="text" name="email" value={value.email} onChange={changeHandler}></input>
                <label className={styles["label"]}>Password</label>
                <input className={styles["input"]} type="password" name="password" value={value.password} onChange={changeHandler}></input>
                <input className={styles["input"]} type="submit" value="Submit"></input>
            </form>
        </div>
        <div className={styles["no-acc-box"]}>
            <h1 className={styles["no-acc"]}>New to our store?<Link to="/register" className={styles["anchr"]}>Register here</Link> </h1>
        </div>
    </main>
    )
}