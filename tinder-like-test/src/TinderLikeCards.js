import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderLikeCards.css';
import Data from './data/data.json';
import  db  from './firebaseConfig';
import { addDoc, collection } from "firebase/firestore";

const onSwipe = async (direction) => {
    if (direction == "right") {
        console.log("liked")
        try {
            const docRef = await addDoc(collection(db, "liked"), {
                created: Date().toLocaleString(),
                action: "liked"
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    } else if (direction == "left") {
        console.log("disliked")
        try {
            const docRef = await addDoc(collection(db, "disliked"), {
                created: Date().toLocaleString(),
                action: "disliked"
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

}

function TinderLikeCards() {
    return (
        <div>
            <div className="container">
                {Data.map(person=> (
                    <TinderCard className="swipeCard" key={person.id} preventSwipe={['up','down']} onSwipe={onSwipe}>
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.title}</h3>
                            dataLikes();
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderLikeCards;