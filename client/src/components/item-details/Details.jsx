import { useContext,} from 'react'
import styles from './Details.module.css'
import {useParams, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import fetchDetailsData from './fetchDetailsData';
import handlers from './handlers';

export default function Details() {
    let { itemID } = useParams();

    let { id, isAuthenticated } = useContext(AuthContext);

    let {item,likes,isOwner,hasLiked,loading, likeSetter, hasLikedSetter} = fetchDetailsData(id, itemID)

    let {deleteItem,likeItem,dislikeItem} = handlers(itemID,id,likeSetter,hasLikedSetter)

    return (
        loading == true 
        ?
        <div className={styles["loader"]}></div>
        :
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
                                <Link to={`/catalog/details/edit/${itemID}`} ><button className={styles["edit-btn"]}>Edit</button></Link>
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
                        <p style={{ color: "#857776", marginTop: "30px" }}> Current Number of Likes: {likes.likesCounter ? likes.likesCounter.length : ''} </p>
                </div>
            </div>
        </main>
    )
}