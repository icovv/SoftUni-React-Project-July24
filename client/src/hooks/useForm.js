import { useState } from "react"


export default function useForm(formType,initialValue){
    let [value,setValue] = useState(initialValue);

    let changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    let submitHandler = (e) => {
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
            console.log('logged in')
            
            setValue({
                email: '',
                password: '',
            })
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