import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import '../index.css'


export class Home extends Component {
    
    render() {
        return (
            <div className="container-fluid" id="home">

                {/*education*/}
                <div id="div1">
                    <motion.div className="title"
                        initial={{x: '500em', y: '300em'}}
                        animate={{x: '-4em', y: '4em'}}
                        transition={{delay: 0, duration:1.8}}
                    >
                        <h1 id="edu">Education</h1>
                    </motion.div>   
                    <Link to="/education">
                        <motion.div className="divEllipse" width={200} height={200}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0, duration:1}}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="url(#icon-pen-gradient) #fff" class="bi bi-vector-pen" viewBox="0 0 16 16"
                            >
                            <defs>
                                <linearGradient
                                    id="icon-pen-gradient" x2="0.35" y2="1"
                                >
                                    <stop offset="0%" stop-color="var(--color-stop)" />
                                    <stop offset="30%" stop-color="var(--color-stop)" />
                                    <stop offset="60%" stop-color="var(--color-stop2)" />
                                    <stop offset="100%" stop-color="var(--color-bot)" />
                                </linearGradient>
                            </defs>
                                <path classname="pen" fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                <path classname="pen" fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                            </svg>
                        </motion.div>
                    </Link>
                </div>

                {/*skills & contact*/}
                <div id="div2">
                    <motion.div className="title"
                        initial={{x: '500em', y: '-50em'}}
                        animate={{x: '-3em', y: '3.5em'}}
                        transition={{delay: 0.2, duration:1.8}}
                    >
                        <h1 id="ski">Skills</h1>
                    </motion.div>
                    <Link to="/skills">
                    <motion.div className="divSquare" width={200} height={200}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3, duration:1}}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="url(#icon-star-gradient) #fff" class="bi bi-star" viewBox="0 0 16 16"
                        >
                            <defs>
                                <linearGradient
                                    id="icon-star-gradient" x2="0.35" y2="1"
                                >
                                    <stop offset="0%" stop-color="var(--color-stop)" />
                                    <stop offset="30%" stop-color="var(--color-stop)" />
                                    <stop offset="60%" stop-color="var(--color-stop2)" />
                                    <stop offset="100%" stop-color="var(--color-bot)" />
                                </linearGradient>
                            </defs>
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </motion.div>
                    </Link>
                    <Link to="/contact">
                        <motion.div className="divStar" width={200} height={200}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.7, duration:1}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="white" class="bi bi-envelope" viewBox="0 0 16 16"
                            >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>  
                        </motion.div>
                    </Link>
                    <motion.div className="title"
                        initial={{x: '-500em', y: '200em'}}
                        animate={{x: '-1em', y: '1.5em'}}
                        transition={{delay: 0.6, duration:1.8}}
                    >
                        <h1 id="con"> Contact</h1>
                    </motion.div>
                </div>

                {/*projects*/}
                <div id="div3">
                    <Link to="/projects">
                        <motion.div className="divTriangle" width={200} height={200}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5, duration:1}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="black" class="bi bi-briefcase" viewBox="0 0 16 16"
                            >
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </motion.div>
                    </Link>
                    <motion.div className="title"
                        initial={{x: '-500em', y: '-100em'}}
                        animate={{x: '-1em', y: '5.5em'}}
                        transition={{delay: 0.4, duration:1.8}}
                    >
                        <h1 id="pro">Projects</h1>
                    </motion.div>
                </div>
                <div id="centralButton">
                    

                </div>
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
        )
    }
}

export default Home




