export default function handler(dataReloader, changeValues,dataLoader){
    function clearHandler(e){
    e.preventDefault()
        dataReloader(true);
        changeValues({search: ``, dropdown: ``})
        dataLoader(true);
    }
    return{clearHandler}
}