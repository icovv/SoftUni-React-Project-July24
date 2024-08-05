import { useNavigate } from "react-router-dom";
import { addLikesToCar, deleteCar, removeLikeFromCar } from "../../api/carsService";


export default function handlers(itemID, id, likeSetter, hasLikedSetter, changebtnStatus) {
    let navigate = useNavigate();

    let deleteItem = async () => {
        if (confirm('Are you sure you want to delete this car?')) {
                changebtnStatus(true);
            try {
                await deleteCar(itemID);
                changebtnStatus(false);
                navigate('/catalog')
            } catch (error) {
                changebtnStatus(false);
                console.error(error.message);
                return;
            }
                changebtnStatus(false)
        };
    }
    let likeItem = async () => {
            changebtnStatus(true);
        try {
            let data = await addLikesToCar(itemID, id)
            likeSetter(data.likes);
            hasLikedSetter(true);
        } catch (error) {
            changebtnStatus(false);
            console.error(error.message);
            return;
        }
        changebtnStatus(false);
    }
    let dislikeItem = async () => {
            changebtnStatus(true);
        try {
            let data = await removeLikeFromCar(itemID, id);
            likeSetter(data.likes);
            hasLikedSetter(false);
        } catch (error) {
            changebtnStatus(false);
            console.error(error.message);
            return;
        }
        changebtnStatus(false);
    }
    return {
        deleteItem,
        likeItem,
        dislikeItem,
    }
}