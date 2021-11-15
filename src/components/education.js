import React, { Component } from 'react'

export class education extends Component {
    render() {
        return (
            <div className="container-fluid" id="edu">
                <div className="container" id="image1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg>
                    {/*audio*/}
                    <div id="audioDiv" className="d-block">
                        <div id="engDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" id="engIcon" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                            <p id="engText">ENG</p>
                        </div>
                        <div id="spaDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" id="spaIcon" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                            <p id="spaText">SPA</p>
                        </div>
                    </div>
                </div>
                <div id="eduText" className="container">
                    <div>
                        <p>Technical School #1 Bernardo Ader</p>
                        <p>Electronic Technician degree</p>
                        <p>Kable Academy</p>
                        <p>Web Developer certificate</p>
                    </div>   
                </div>
                <div className="container" id="image2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default education
