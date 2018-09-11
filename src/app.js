import React, { Component } from "react";
import GodCard from "./components/GodCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import gods from "./gods.json";
import "./app.css";

class App extends Component {
    state = {
        score: 0,
        highscore: 0,
        gods
    };

    handleClick = (id) => {
        let shuffledGods = this.shuffleGods(this.state.gods);

        this.findAndUpdateGods(shuffledGods, id);
    }

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


    findAndUpdateGods = (array, id) => {
        let updatedArray = [];
        let twiceClicked = false;


        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                if (array[i].clicked === false) {
                    twiceClicked = false;
                    array[i].clicked = true;
                    updatedArray.push(array[i]);
                }
                else {
                    console.log("Loser");
                    twiceClicked = true;
                    updatedArray.push(array[i]);
                }
            }
            else {
                updatedArray.push(array[i]);
            }
        }
        if (twiceClicked === false) {
            this.setState({
                gods: updatedArray,
                score: this.state.score + 1
            })
        }
        else {
            this.setState({
                gods: [
                    {
                        "id": 1,
                        "name": "Tyr",
                        "image": "/images/tyr.png",
                        "clicked": false
                    },
                    {
                        "id": 2,
                        "name": "Freyer",
                        "image": "/images/freyer.png",
                        "clicked": false
                    },
                    {
                        "id": 3,
                        "name": "Vidar",
                        "image": "./images/vidar.png",
                        "clicked": false
                    },
                    {
                        "id": 4,
                        "name": "Snotra",
                        "image": "/images/snotra.png",
                        "clicked": false
                    },
                    {
                        "id": 5,
                        "name": "Ullr",
                        "image": "/images/ullr.png",
                        "clicked": false
                    },
                    {
                        "id": 6,
                        "name": "Hodr",
                        "image": "/images/hodr.png",
                        "clicked": false
                    },
                    {
                        "id": 7,
                        "name": "Hoenir",
                        "image": "/images/hoenir.png",
                        "clicked": false
                    },
                    {
                        "id": 8,
                        "name": "Jord",
                        "image": "/images/jord.png",
                        "clicked": false
                    },
                    {
                        "id": 9,
                        "name": "Hel",
                        "image": "/images/hel.png",
                        "clicked": false
                    },
                    {
                        "id": 10,
                        "name": "Bragi",
                        "image": "/images/bragi.png",
                        "clicked": false
                    },
                    {
                        "id": 11,
                        "name": "Njordr",
                        "image": "/images/njordr.png",
                        "clicked": false
                    },
                    {
                        "id": 12,
                        "name": "Delling",
                        "image": "/images/delling.png",
                        "clicked": false
                    }
                ],
                score: 0
            });
        };
    };


    render() {
        return (
            <Wrapper>
                <Title>Norse Gods</Title>
                <div className="container">
                    <div className="row">
                        {this.state.gods.map(gods => {
                            return <GodCard
                                id={gods.id}
                                key={gods.id}
                                name={gods.name}
                                image={gods.image}
                                handleClick={this.handleClick}
                            />
                        })}
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default App;