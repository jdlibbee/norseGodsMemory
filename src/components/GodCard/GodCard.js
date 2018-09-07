import React from "react";
import "./GodCard.css";

const GodCard = props => (

    <div className="col s3 m4">
        <div className="card">
            <div className="card-image">
                <img alt={props.name} src={props.image} />
            </div>
            <span onClick={() => props.shuffleGods(props.id)}
                className="shuffle"></span>
        </div>
    </div>
);

export default GodCard;



