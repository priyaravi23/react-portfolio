import React from 'react';
import Voltron from '../assets/images/voltron.png';
import Infinity from '../assets/images/infinity.png';
import Todo from '../assets/images/task-tracker.png';
import WineBlogger from '../assets/images/wine-blogger.png';
import WeatherScanner from '../assets/images/weather-scanner.png';
import SpecialtyMarket from '../assets/images/specialty-market.png';
import Taskinator from '../assets/images/taskinator.png';
import PizzaHunt from '../assets/images/pizza-hunt.png';
import PwaBudgetTracker from '../assets/images/pwa-budget-tracker.png';
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
                                        <img src={Todo} alt="Task Tracker App"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Task Tracker</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/react-todo-cypress' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://react-todo-cypress.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--2">
                                        <img src={WeatherScanner} alt="Weather Scanner App"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Weather Scanner</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/weather-app-client' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://weather-detector-app.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--3">
                                        <img src={Infinity} alt="Movie Rental App"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Movie Rentals</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/infinity-rental-client' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://infinity-rental.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--4">
                                        <img src={WineBlogger} alt="Wine Blogger"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Wine Blogger</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/anitapeppercorn/wine-blogger' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://secure-chamber-23014.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--5">
                                        <img src={Voltron} alt="Voltron App"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Voltron</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/react-voltron-app' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://react-voltron-app.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--6">
                                        <img src={SpecialtyMarket} alt="Shop Corner"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Shop Corner</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/groceries-shopping-app' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://specialty-market.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--7">
                                        <img src={Taskinator} alt="Taskinator App"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Taskinator</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/taskinator' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://priyaravi23.github.io/taskinator/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--8">
                                        <img src={PizzaHunt} alt="Pizza Hunt"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>Pizza Hunt</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/pizza-hunt' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://pizza-hunt-app.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
                                    </div>

                                    <div className="grid-item gallery__item--9">
                                        <img src={PwaBudgetTracker} alt="PWA Budget Tracker"
                                             className="gallery__img"/>
                                        <div className="desc">
                                            <h5>PWA Budget Tracker</h5>
                                        </div>

                                        <div className='dep-links'>
                                          <a href='https://github.com/priyaravi23/pwa-budget-tracker' target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a>
                                          <a href='https://budget-tracker-pwa-app.herokuapp.com/' target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>
                                        </div>
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
