import React from 'react';
import Voltron from '../assets/images/voltron.png';
import Infinity from '../assets/images/infinity.png';
import Todo from '../assets/images/task-tracker.png';
import RunBuddy from '../assets/images/run-buddy.png';
import WeatherScanner from '../assets/images/weather-scanner.png';
import SpecialtyMarket from '../assets/images/specialty-market.png';
import '../App.css';
import '../portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    <div className="grid-item gallery__item--1">
                                        <a href='https://react-todo-cypress.herokuapp.com/' target="_blank">
                                            <img src={Todo} alt="Task Tracker App"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Task Tracker</h5>
                                                <p>React/Cypress</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--2">
                                        <a href='https://weather-detector-app.herokuapp.com/' target="_blank">
                                            <img src={WeatherScanner} alt="Weather Scanner App"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Weather Scanner</h5>
                                                <p>React/Node/REST APIs</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--3">
                                        <a href='https://infinity-rental.herokuapp.com/' target="_blank">
                                            <img src={Infinity} alt="Movie Rental App"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Movie Rentals</h5>
                                                <p>MERN Stack</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--4">
                                        <a href='https://priyaravi23.github.io/run-buddy/' target="_blank">
                                            <img src={RunBuddy} alt="Run Buddy"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Run Buddy</h5>
                                                <p>HTML/CSS Grid/Flexbox</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--5">
                                        <a href='https://react-voltron-app.herokuapp.com/' target="_blank">
                                            <img src={Voltron} alt="Voltron App"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Voltron</h5>
                                                <p>React/Redux/Cypress/Jest/Local Storage</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--6">
                                        <a href='https://specialty-market.herokuapp.com/' target="_blank">
                                            <img src={SpecialtyMarket} alt="Specialty Market"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Specialty Market</h5>
                                                <p>React/CSS Grid</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;