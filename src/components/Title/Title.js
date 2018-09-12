import React from "react";
import "./Title.css";

const Title = props =>
    (<div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center title">
                    <h3>{props.children}</h3>
                </a>
                <ul>
                    <li>Scores: {props.score}</li>
                    <li>Best Score: {props.highscore}</li>
                </ul>
            </div>
        </nav>
    </div>);

export default Title;
