import React from "react";
import CollaborativeCargo from './collaborative-cargo.PNG'
import RunBuddy from './RunBuddy.PNG'
import WeathertoCamp from './weathertocamp.PNG'

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
                    <img src={RunBuddy} alt="RunBuddy" />
                    <h3>Run Buddy</h3>
                    <a href="https://github.com/ebtaterbug/run-buddy" target="_blank">
                        <button >GitHub</button>
                    </a>
                    <a href="https://ebtaterbug.github.io/run-buddy/" target="_blank">
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