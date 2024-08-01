import { useNavigate } from "react-router-dom";
import { addLikesToCar, deleteCar, deleteCarLikes, removeLikeFromCar } from "../../api/carsService";


export default function handlers(itemID,id,likeSetter,hasLikedSetter){
    let navigate = useNavigate();

    let deleteItem = async () => {
        if (confirm('Are you sure you want to delete this car?')) {
            await deleteCar(itemID);
            await deleteCarLikes(itemID);
            navigate('/catalog')
        };
    }   
    let likeItem = async () => {
            let data = await addLikesToCar(itemID,id)
            likeSetter(data);
            hasLikedSetter(true);
    }
    let dislikeItem = async () => {
            let data = await removeLikeFromCar(itemID,id);
            likeSetter(data);
            hasLikedSetter(false);
    }
    return{
        deleteItem,
        likeItem,
        dislikeItem,
    }
}