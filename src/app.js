import React, { Component } from "react";
import GodCard from "./components/GodCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import gods from "./gods.json";
import "./app.css";

class App extends Component {
    state = {
        gods
    };

    shuffleGods = (gods) => {
        let i = gods.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = gods[i];
            gods[i] = gods[j];
            gods[j] = temp;
            i--;
        }
        return gods;
    };

    render() {
        return (
            <Wrapper>
                <Title>Norse Gods</Title>
                <div className="container">
                    <div className="row">
                        {this.state.gods.map(gods => (
                            <GodCard
                                shuffleGods={this.shuffleGods}
                                id={gods.id}
                                key={gods.id}
                                name={gods.name}
                                image={gods.image}
                            />
                        ))}
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default App;