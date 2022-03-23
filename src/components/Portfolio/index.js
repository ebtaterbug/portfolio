import React from "react";
import CollaborativeCargo from './collaborative-cargo.PNG'
import WeathertoCamp from './weathertocamp.PNG'
import LetsChat from './letschat.PNG'

function Portfolio() {

    return (
        <div className="container1 flex-row">
            <div className="my-5 center">
                    <a href="https://collaborative-cargo.herokuapp.com/" target="_blank">
                    <img src={CollaborativeCargo} alt="Collaborative Cargo" />
                    </a>
                    <h3>Collaborative Cargo</h3>
                    <a href="https://github.com/ebtaterbug/collaborative-cargo" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://collaborative-cargo.herokuapp.com/" target="_blank">
                        <button>Live Site</button>
                    </a>
                    <div>Freight loadboard for posting 
                    <br></br>truck and cargo availability.</div>
            </div>
            <div className="my-5 center">
                    <a href="https://rjblake88.github.io/weather-to-camp/" target="_blank">
                    <img src={WeathertoCamp} alt="Weather to Camp" />
                    </a>
                    <h3>Weather To Camp</h3>
                    <a href="https://github.com/ebtaterbug/weather-to-camp" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://rjblake88.github.io/weather-to-camp/" target="_blank">
                        <button>Live Site</button>
                    </a>
                    <div>Search for campsites and their
                    <br></br>current weather on a map.</div>
            </div>
            <div className="my-5 center">
                    <a href="https://vast-temple-57974.herokuapp.com/" target="_blank">
                    <img src={LetsChat} alt="Let's Chat" />
                    </a>
                    <h3>Let's Chat</h3>
                    <a href="https://github.com/ebtaterbug/lets-chat" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://vast-temple-57974.herokuapp.com/" target="_blank">
                        <button>Live Site</button>
                    </a>
                    <div>Real time messaging app 
                    <br></br>with user authentication.</div>
            </div>
        </div>
    );
};

export default Portfolio;