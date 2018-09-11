import React from "react";
import "./GodCard.css";

const GodCard = props => (
    <div className="col s3 m4">
        <div className="card click-item">
            <div className="card-image">
                <img
                    alt={props.name}
                    src={props.image}
                    id={props.id}
                    onClick={() => props.handleClick(props.id)}
                />
            </div>
        </div>
    </div>
);

export default GodCard;



