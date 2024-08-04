import { useNavigate } from "react-router-dom";
import { addLikesToCar, deleteCar, removeLikeFromCar } from "../../api/carsService";


export default function handlers(itemID,id,likeSetter,hasLikedSetter){
    let navigate = useNavigate();

    let deleteItem = async () => {
        if (confirm('Are you sure you want to delete this car?')) {
            await deleteCar(itemID);
            navigate('/catalog')
        };
    }   
    let likeItem = async () => {
            let data = await addLikesToCar(itemID,id)
            likeSetter(data.likes);
            hasLikedSetter(true);
    }
    let dislikeItem = async () => {
            let data = await removeLikeFromCar(itemID,id);
            likeSetter(data.likes);
            hasLikedSetter(false);
    }
    return{
        deleteItem,
        likeItem,
        dislikeItem,
    }
}