import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderLikeCards.css';
import Data from './data/data.json';

function TinderLikeCards() {
    return (
        <div>
            <div className="container">
                {Data.map(person=> (
                    <TinderCard className="swipeCard" key={person.id} preventSwipe={['up','down']}>
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