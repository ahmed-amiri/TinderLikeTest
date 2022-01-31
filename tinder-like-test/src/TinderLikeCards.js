import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderLikeCards.css';

function TinderLikeCards() {
    //init variables for cards
    const [people, setPeople] = useState([
        {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952"
        },
        {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796"
        }
    ]);
    return (
        <div>
            <div className="container">
                {people.map(person => (
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