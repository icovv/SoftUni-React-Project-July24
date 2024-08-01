import { useState} from "react"

export default function useForm(initialValue){
    let [value,setValue] = useState(initialValue);
    
    let changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }
    let changeValues = (newValue) => {
        setValue(newValue)
    }
    return{
        value,
        changeHandler,
        changeValues
    }
}