import { useState} from "react"
import {useNavigate} from 'react-router-dom'

export default function useForm(formType,initialValue,onSubmitHandler){
    let [value,setValue] = useState(initialValue);
    // let navigate = useNavigate();
    let changeHandler = (e,err) => {
        if (!!err){
        if (formType == 'register' && err.length > 0){
            setValue(state => ({
                email: value.email,
                password:'',
                repass : ''
            }))
        }
        if (formType == 'login' && err.length > 0){
            setValue(state => ({
                email: value.email,
                password:'',
            }))
        }
        }
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    async function submitHandler(e){
        e.preventDefault();
        
        // if (formType == `register`){
        //     let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

        //     if (value.email.trim() == '' || value.password.trim() == ''){
        //         return alert('All fields are required!');
        //     }
        //     if(!pattern.test(value.email.trim())){
        //         return alert('You have to type a valid email!');
        //     }
        //     if(value.password.trim().length < 4){
        //         return alert('Your password must be at least 4 symbols long!');
        //     }
        //     if(value.password.trim() != value.repass.trim()){
        //         return alert('Your passwords should match!');
        //     }
        //     let {email,password} = value;

        //     email.trim();
        //     password.trim();

        //     let data = await onSubmitHandler(email,password);

        //     if (data.message){
        //         return alert(data.message);
        //     }
        //     setValue({
        //         email: '',
        //         password: '',
        //         repass: ''
        //     })
        //     navigate('/')
        // }
        
        // if (formType == `login`){
        //     if (value.email.trim() == '' || value.password.trim() == ''){
        //         return alert('All fields are required!');
        //     }
        //     let {email, password} = value

        //     email.trim();
        //     password.trim();

        //     let data =  await onSubmitHandler(email,password);
        //     if (data.message){
        //         return alert(data.message);
        //     }
        //     setValue({
        //         email: '',
        //         password: '',
        //     })
        //     navigate('/')
        // }

        if (formType == `edit`){
            console.log(value.fuel)
            
            setValue({
                brand:"",
                year:"",
                model:"",
                capacity:"",
                power:"",
                color:"",
                image:"",
                description:"",
            })
        }

        if (formType == `create`){
            console.log(value.fuel)
            
            setValue({
                brand:"",
                year:"",
                model:"",
                capacity:"",
                power:"",
                color:"",
                image:"",
                description:"",
            })
        }
    }

    return{
        value,
        changeHandler,
        submitHandler
    }
}