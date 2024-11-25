import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/company'); 
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to our job website</h1>
                <p>WE deliver amazing results..</p>
            </div>

            {/* About Section */}
            <div className="about">
                <h2>Don't look anywhere else</h2>
                <p>
                  Looking for a job then don't look anywhere else just come to us you will get job in Google easily
                </p>
            </div>

            {/* Features Section */}
            <div className="features">
                <h2>Features</h2>
                <div className="feature-cards">
                    <div className="card">
                        <h3>Easy Job finder</h3>
                        <p>
                           Lots of job available here
                        </p>
                    </div>
                    <div className="card">
                        <h3>Don't think about anything else</h3>
                        <p>
                            With us you don't have to worry about anything at all.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Job Search was never this easy, Yay</h3>
                        <p>
                           Don't believe us? no worries try us. 
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Job Portal Application. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
