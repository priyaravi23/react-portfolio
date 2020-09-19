import React from 'react';
import Avatar from '../assets/images/avatar.png';
import BerkeleyLogo from '../assets/images/berkeley.png';
import PittsburghLogo from '../assets/images/pittsburgh.png';
import CarletonLogo from '../assets/images/carleton.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        Software Engineer with a demonstrated history of working on production web and mobile applications. Deep
                                        understanding and technical expertise in Computer Science fundamentals, Javascript, ReactJS, Redux, NodeJS, MongoDB CSS,
                                        HTML and other frontend technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of California, Berkeley</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <img className='university-logo' src={BerkeleyLogo} />
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>University Of Pittsburgh</div>
                                        <div className='title-concentration'>Master of Science in Medical Product Engineering</div>
                                    </div>

                                    <div className="grid-item">
                                        <img className='university-logo' src={PittsburghLogo} />
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Carleton University</div>
                                        <div className='title-concentration'>Bachelor of Electrical & Computer Engineering</div>
                                    </div>

                                    <div className="grid-item">
                                        <img className='university-logo' src={CarletonLogo} />
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

export default About;
