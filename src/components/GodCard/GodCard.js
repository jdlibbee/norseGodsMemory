import React from "react";
import "./GodCard.css";

const GodCard = props => (
    <div className="container">
        <div className="row">
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img alt={props.name} src={props.image} />
                    </div>
                    <span onClick={() => props.shuffleGods(props.id)}
                        className="shuffle"></span>
                </div>
            </div>
        </div>
    </div>
);

export default GodCard;



