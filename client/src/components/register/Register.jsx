import { useContext, useState } from 'react';
import useForm from '../../hooks/useForm'
import styles from './Register.module.css'
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Register(){
    let {registerHandler} = useContext(AuthContext)
    let [err,setErr] = useState([]);
    let {value, changeHandler,} = useForm("register", {
        email:'',
        password:'',
        repass:'',
    });

    let submitHandler = async (e) => {
        e.preventDefault();
        let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        let errs = [];
        if (value.email.trim() == '' || value.password.trim() == ''){
            errs.push({message:"All fields are required!"})
            // return alert('All fields are required!');
        }
        if(!pattern.test(value.email.trim())){
            errs.push({message:"You have to type a valid email!"})
            // return alert('You have to type a valid email!');
        }
        if(value.password.trim().length < 4){
            errs.push({message:'Your password must be at least 4 symbols long!'})
            // return alert('Your password must be at least 4 symbols long!');
        }
        if(value.password.trim() != value.repass.trim()){
            errs.push({message:'Your passwords should match!'})
            // return alert('Your passwords should match!');
        }

        if(errs.length > 0){
            changeHandler(e,errs);
            setErr(errs);
            return;
        }
        let {email,password} = value;

        email.trim();
        password.trim();

        let data = await registerHandler(email,password);

        if (data.message){
            changeHandler(e,[{message:data.message}]);
            setErr([{message:data.message}])
            return;
        }

        
        navigate('/')
    }

    let divKill = (e) => {
        setErr([]);
    }
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
                <form className= {styles["register-form-form"]} onSubmit={submitHandler}>
                    <label className={styles["register-form-label"]}>Email</label>
                    <input className={styles["register-form-input"]} type="text" name="email" value={value.email || ``}  onChange={changeHandler} ></input>
                    <label className={styles["register-form-label"]}>Password</label>
                    <input className={styles["register-form-input"]} type="password" name="password" value={value.password || ``} onChange={changeHandler} ></input>
                    <label className={styles["register-form-label"]}>Repeat Password</label>
                    <input className={styles["register-form-input"]} type="password" name="repass" value={value.repass || ``} onChange={changeHandler} ></input>
                    <input className={styles["register-form-input"]} type="submit" value="Submit"></input>
                </form>
            </div>
            <div className={styles["no-acc-box"]}>
                <h1 className={styles["no-acc"]}>Already have an account?<Link to="/login" className={styles["anchr"]}>Login here</Link></h1>
            </div>
        </main>
    )
}