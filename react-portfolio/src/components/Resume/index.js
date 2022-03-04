import React from "react";
import resume from "./resume.PNG";

function Resume() {
    return (
        <section className="container">
            <a><img src={resume} className="resume" alt="Resume" /></a>
        </section>
    );
};

export default Resume;