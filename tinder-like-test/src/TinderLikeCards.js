import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderLikeCards.css';
import Data from './data/data.json';

const onSwipe = (direction) => {
    if (direction == "right") {
        console.log("liked")
    }
    else if(direction=="left") {
        console.log("disliked")
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
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderLikeCards;