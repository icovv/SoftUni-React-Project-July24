import { useContext, useEffect, useState } from 'react'
import styles from './Details.module.css'
import { addLikesToCar, deleteCar, deleteCarLikes, getCertainCarLikes, getOneCar, hasUserLiked, removeLikeFromCar } from '../../api/carsService';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

export default function Details() {
    let { itemID } = useParams();
    let { id, isAuthenticated } = useContext(AuthContext);
    let [item, setItem] = useState({});
    let [likes, setLikes] = useState({});
    let [isOwner, setisOwner] = useState(false);
    let [hasLiked, setHasLiked] = useState(``);
    let navigate = useNavigate();
    useEffect(() => {
        async function getItem() {
            let data = await getOneCar(itemID);
            let likesData = await getCertainCarLikes(itemID);
            let hasUserLikedCar = await hasUserLiked(id,itemID);
            setLikes(likesData);
            setItem(data);
            setHasLiked(hasUserLikedCar);
            if (id == data._ownerId) {
                setisOwner(true);
            }
        }
        getItem();
    }, [])

    let deleteItem = async () => {
        if (confirm('Are you sure you want to delete this car?')) {
            await deleteCar(itemID);
            await deleteCarLikes(itemID);
            navigate('/catalog')
        };
    }   
    let likeItem = async () => {
            let data = await addLikesToCar(itemID,id)
            setLikes(data);
            setHasLiked(true);
    }
    let dislikeItem = async () => {
            let data = await removeLikeFromCar(itemID,id);
            setLikes(data);
            setHasLiked(false);
    }
    return (
        <main className={styles['main']}>
            <div className={styles["product-details"]}>
                <div className={styles["image-container"]}>
                    <img src={item.imageURL} alt="Car Image"></img>
                </div>
                <div className={styles["details-content"]}>
                    <h2 style={{ color: "#857776" }}><strong>{item.carBrand}</strong> </h2>
                    <p style={{ color: 'black' }}><strong>Model:</strong> {item.carModel}</p>
                    <p style={{ color: 'black' }}><strong>Year:</strong> {item.year}</p>
                    <p style={{ color: 'black' }}><strong>Engine Capacity:</strong> {item.engineCapacity}</p>
                    <p style={{ color: 'black' }}><strong>Horse Power:</strong> {item.horsePower}</p>
                    <p style={{ color: 'black' }}><strong>Fuel: </strong> {item.fuelType}</p>
                    <p style={{ color: 'black' }}><strong>Color: </strong> {item.color}</p>
                    <p style={{ color: 'black' }}><strong>Description:</strong> {item.description}</p>
                    <div className={styles["buttons"]}>

                        {isAuthenticated && isOwner
                            ?
                            <>
                                <a href={`edit/${item._id}`} ><button className={styles["edit-btn"]}>Edit</button></a>
                                <button className={styles["delete-btn"]} onClick={deleteItem}>Delete</button>
                            </>

                            :
                        isAuthenticated 
                        ?
                        hasLiked ?
                            <button className={styles["like-btn"]} onClick={dislikeItem}>Dislike</button>
                            :
                            <button className={styles["like-btn"]} onClick={likeItem}>Like</button>
                            :
                            <></>
                        }
                    </div>
                        {/* {hasLiked
                        ?
                        <>
                        <p style={{ color: "#857776", marginTop: "30px" }}> You have liked this post!</p>
                        <p style={{ color: "#857776", marginTop: "30px" }}> Current Number of Likes: {likes.likesCounter ? likes.likesCounter.length : ''} </p>
                        </>
                        :
                        <p style={{ color: "#857776", marginTop: "30px" }}> Current Number of Likes: {likes.likesCounter ? likes.likesCounter.length : ''} </p>
                        } */}
                        <p style={{ color: "#857776", marginTop: "30px" }}> Current Number of Likes: {likes.likesCounter ? likes.likesCounter.length : ''} </p>
                </div>
            </div>
        </main>
    )
}