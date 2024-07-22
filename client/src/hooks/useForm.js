import { useState} from "react"
import {useNavigate} from 'react-router-dom'

export default function useForm(formType,initialValue,onSubmitHandler){
    let [value,setValue] = useState(initialValue);
    let navigate = useNavigate();
    let changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    async function submitHandler(e){
        e.preventDefault();
        
        if (formType == `register`){
            console.log('registered')

            setValue({
                email: '',
                password: '',
                repass: ''
            })
        }
        
        if (formType == `login`){
            if (value.email.trim() == '' || value.password.trim() == ''){
                return alert('All fields are required!');
            }
            let {email, password} = value

            let data =  await onSubmitHandler(email,password);
            if (data.message){
                return alert(data.message);
            }
            setValue({
                email: '',
                password: '',
            })
            navigate('/')
        }

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