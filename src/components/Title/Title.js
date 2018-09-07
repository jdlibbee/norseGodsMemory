import React from "react";
import "./Title.css";

const Title = props =>
    <nav>
        <div class="nav-wrapper">
            <a class="brand-logo center"><image src="/images/earthSymbol.jpg" /></a>
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
