import { useContext} from 'react';
import useForm from '../../hooks/useForm'
import styles from './Register.module.css'
import AuthContext from '../../context/AuthContext';
import { Link} from 'react-router-dom';
import useHandleSubmit from '../../hooks/useHandleSubmit';

export default function Register(){
    let {registerHandler} = useContext(AuthContext)

    let {value, changeHandler, changeValues} = useForm({
        email:'',
        password:'',
        repass:'',
    });
    let [loading, setIsLoading] = useState(false);
    let loadingFN = (value) => {setIsLoading(value)}
    let {err,registerSubmitHandler,divKill} = useHandleSubmit(value,null,changeValues,registerHandler,null,loadingFN);
    
    return(
        <main>
            <div className={styles["error-container"]}>
            {err.length > 0 
            ?
            err.map(item => <div key={item.message} className={styles["error-message"]}id="error-message" onAnimationEnd={divKill}>{item.message}</div> )
            :
            <></>
            }
            </div>
            
            <div className={styles["register-form"]}>
                <h1 >Registration Form</h1>
                <form className= {styles["register-form-form"]} onSubmit={registerSubmitHandler}>
                    <label className={styles["register-form-label"]}>Email</label>
                    <input className={styles["register-form-input"]} type="text" name="email" value={value.email || ``}  onChange={changeHandler} ></input>
                    <label className={styles["register-form-label"]}>Password</label>
                    <input className={styles["register-form-input"]} type="password" name="password" value={value.password || ``} onChange={changeHandler} ></input>
                    <label className={styles["register-form-label"]}>Repeat Password</label>
                    <input className={styles["register-form-input"]} type="password" name="repass" value={value.repass || ``} onChange={changeHandler} ></input>
                    <input className={styles["register-form-input"]} type="submit" value="Submit" disabled={loading}></input>
                </form>
            </div>
            <div className={styles["no-acc-box"]}>
                <h1 className={styles["no-acc"]}>Already have an account?<Link to="/login" className={styles["anchr"]}>Login here</Link></h1>
            </div>
        </main>
    )
}