import { useState} from "react"

export default function useForm(formType,initialValue){
    let [value,setValue] = useState(initialValue);
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

    return{
        value,
        changeHandler,
        submitHandler
    }
}