import React from "react";
import CollaborativeCargo from './collaborative-cargo.PNG'
import RunBuddy from './RunBuddy.PNG'
import WeathertoCamp from './weathertocamp.PNG'
import LetsChat from './letschat.PNG'

function Portfolio() {

    return (
        <div className="container">
            <div className="my-5 center">
                    <img src={CollaborativeCargo} alt="CollaborativeCargo" />
                    <h3>Collaborative Cargo</h3>
                    <a href="https://github.com/ebtaterbug/collaborative-cargo" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://collaborative-cargo.herokuapp.com/" target="_blank">
                        <button>Live Site</button>
                    </a>
            </div>
            <div className="my-5 center">
                    <img src={LetsChat} alt="WeathertoCamp" />
                    <h3>Weather To Camp</h3>
                    <a href="https://github.com/ebtaterbug/lets-chat" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://vast-temple-57974.herokuapp.com/" target="_blank">
                        <button>Live Site</button>
                    </a>
            </div>
            <div className="my-5 center">
                    <img src={WeathertoCamp} alt="WeathertoCamp" />
                    <h3>Weather To Camp</h3>
                    <a href="https://github.com/ebtaterbug/weather-to-camp" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://rjblake88.github.io/weather-to-camp/" target="_blank">
                        <button>Live Site</button>
                    </a>
            </div>
            
        </div>
    );
};

export default Portfolio;