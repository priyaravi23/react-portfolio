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

                            {/* Avatar Section */}
                            <div className='card-body'>
                                <div className="row abstract-back">
                                    <img className='avatar' src={Avatar} alt="Avatar" />
                                </div>
                            </div>

                            {/* Summary Section */}
                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    Hi, I’m Priya Ravi, a Senior Software Engineer with 7+ years of experience specializing in React, Next.js, and building scalable, high-performance web applications. I’m passionate about optimizing frontend experiences, creating intuitive user interfaces, and leveraging AI to deliver smarter, user-centric products. I focus on building solutions that solve real-world problems and deliver measurable value to users. </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            {/* Technical Skills Section */}
                            <div className='card-body'>
                                <h2>Technical Skills</h2>
                                <br />

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <strong>Frontend Development:</strong>
                                        <p>React.js, Vue.js, Next.js, TypeScript, JavaScript (ES6+)</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Frameworks & Libraries:</strong>
                                        <p>Material-UI, Tailwind CSS, Styled Components</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>State Management:</strong>
                                        <p>Redux, Vuex, React Context API</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Backend Development:</strong>
                                        <p>Node.js, Express.js, REST APIs, GraphQL</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Databases:</strong>
                                        <p>MongoDB, MySQL</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Testing & Quality:</strong>
                                        <p>Jest, React Testing Library, Cypress</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Build Tools:</strong>
                                        <p>Webpack, Vite, npm, Yarn</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Version Control:</strong>
                                        <p>Git, GitHub</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <strong>Cloud & CI/CD:</strong>
                                        <p>Jenkins, GitHub Actions, AWS</p>
                                    </div>

                                    {/* AI Models/Tools Section */}
                                    <div className='grid-item'>
                                        <strong>AI Models / Tools:</strong>
                                        <p>OpenAI GPT models, Hugging Face, Llama</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education Section */}
                            <div className='card-body'>
                                <h2>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University of California, Berkeley</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>
                                    <div className='grid-item'>
                                        <a href='https://www.berkeley.edu/' target='_blank' rel="noopener noreferrer">
                                            <img className='university-logo' src={BerkeleyLogo} alt="Berkeley Logo" />
                                        </a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>University of Pittsburgh</div>
                                        <div className='title-concentration'>Master of Science in Engineering</div>
                                    </div>
                                    <div className="grid-item">
                                        <a href='https://www.pitt.edu/' target='_blank' rel="noopener noreferrer">
                                            <img className='university-logo' src={PittsburghLogo} alt="Pittsburgh Logo" />
                                        </a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Carleton University</div>
                                        <div className='title-concentration'>Bachelor of Engineering</div>
                                    </div>
                                    <div className="grid-item">
                                        <a href='https://carleton.ca/' target='_blank' rel="noopener noreferrer">
                                            <img className='university-logo' src={CarletonLogo} alt="Carleton Logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Resume Download Link */}
                            <div className='card-body'>
                                <h3>Download Resume: <a href="/react-portfolio/Priya-Resume-2025-Software-Engineer.pdf" download>Priya Ravi</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
