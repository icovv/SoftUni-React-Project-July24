import { useContext } from 'react';
import useForm from '../../hooks/useForm'
import styles from './Register.module.css'
import AuthContext from '../../context/AuthContext';

export default function Register(){
    let {registerHandler} = useContext(AuthContext)
    let {value, changeHandler,submitHandler} = useForm("register", {
        email:'',
        password:'',
        repass:'',
    }, registerHandler);

    return(
        <main>
            <div className={styles["register-form"]}>
                <h1 >Registration Form</h1>
                <form className= {styles["register-form-form"]} onSubmit={submitHandler}>
                    <label className={styles["register-form-label"]}>Email</label>
                    <input className={styles["register-form-input"]} type="text" name="email" value={value.email || ``}  onChange={changeHandler} ></input>
                    <label className={styles["register-form-label"]}>Password</label>
                    <input className={styles["register-form-input"]} type="password" name="password" value={value.password || ``} onChange={changeHandler} ></input>
                    <label className={styles["register-form-label"]}>Repeat Password</label>
                    <input className={styles["register-form-input"]} type="repass" name="repass" value={value.repass || ``} onChange={changeHandler} ></input>
                    <input className={styles["register-form-input"]} type="submit" value="Submit"></input>
                </form>
            </div>
            <div className={styles["no-acc-box"]}>
                <h1 className={styles["no-acc"]}>Already have an account?<a href="/login" className={styles["anchr"]}>Login here</a></h1>
            </div>
        </main>
    )
}