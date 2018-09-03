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

    shuffleGods = id => {
        const gods = this.state.gods
        this.setState([gods]);
    };

    render() {
        return (
            <Wrapper>
                <Title>Norse Gods</Title>
                {this.state.gods.map(gods => (
                    <GodCard
                        shuffleGods={this.shuffleGods}
                        id={gods.id}
                        key={gods.id}
                        name={gods.name}
                        image={gods.image}
                    />
                ))}
            </Wrapper>
        )
    }

}

export default App;