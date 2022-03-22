import React from "react";
import pdf from "./resume.pdf";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


function Resume() {
    return (
            <MDBContainer id="Resume">
                <MDBRow>
                    <MDBCol>
                        <embed src={pdf} width="100%" height="1000vh"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
    );
};

export default Resume;