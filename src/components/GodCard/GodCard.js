import React from "react";
import "./GodCard.css";

const GodCard = props => (
    <div className="card">
        <div className="card-image">
            <img alt={props.name} srce={props.image} />
        </div>
        <span onClick={() => props.shuffleGods(props.id)}
            className="shuffle"></span>
    </div>
);

export default GodCard;