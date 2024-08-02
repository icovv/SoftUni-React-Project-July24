import { useEffect, useState } from "react";
import { getCertainCarLikes, getOneCar, hasUserLiked } from "../../api/carsService";
import { useNavigate } from "react-router-dom";

export default function fetchDetailsData(id,itemID){
    let navigate = useNavigate()
    let [item, setItem] = useState({});
    let [likes, setLikes] = useState({});
    let [isOwner, setisOwner] = useState(false);
    let [hasLiked, setHasLiked] = useState(``);
    let [loading,setIsLoading] = useState(true);

    let likeSetter = (value) => {
        setLikes(value)
    }
    let hasLikedSetter = (value) => {
        setHasLiked(value)
    }
    useEffect(() => {
        async function getItem() {
            let data = await getOneCar(itemID);
            if (data.code == 404){
                navigate('*');
                return;
            }
            let likesData = await getCertainCarLikes(itemID);
            let hasUserLikedCar = await hasUserLiked(id,itemID);
            setLikes(likesData);
            setItem(data);
            setHasLiked(hasUserLikedCar);
            if (id == data._ownerId) {
                setisOwner(true);
            }
            setIsLoading(false);
        }
        getItem();
    }, [])

    return {
        item,
        likes,
        isOwner,
        hasLiked,
        loading,
        likeSetter,
        hasLikedSetter
    }
}