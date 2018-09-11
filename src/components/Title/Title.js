import React from "react";
import "./Title.css";

const Title = props =>
    (<div>
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center title">
                    <h3>{props.children}</h3>
                </a>
                <ul>
                    <li>Scores: </li>
                    <li>Best Score: </li>
                </ul>
            </div>
        </nav>
    </div>);

export default Title;
