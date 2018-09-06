import React from "react";
import "./Title.css";

const Title = props =>
    <nav>
        <div class="nav-wrapper">
            <image src="/images/earthSymbol.jpg" class="brand-logo center" />
            <ul id="nav-mobile" class="left">
                <li className="title"><h4>{props.children}</h4></li>
                <li>Score:</li>
                <li>Score to Beat:</li>
            </ul>
            <ul className="right">
                <li className="instructions">Click Image to Begin!</li>
            </ul>
        </div>
    </nav>;

export default Title;
