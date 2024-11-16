import React from 'react';
import './homepage.css';
import logo from '../assets/image1.png';

const HomePage = () => {
    const goToNextPage = () => {
        window.location.href = "file"; // Update URL as needed
    };

    return (
        <div className="App">
            <div className="top-bar">
                <div className="logo">LastMin</div>
                <button onClick={goToNextPage}>Get Started</button>
            </div>
            <div className="content-wrapper">
                <div className="container">
                    <div className="text-content">
                        <h1>LastMin</h1>
                        <h2>Your Last Minute Tutor</h2>
                        <p>
                            Turn PDFs and videos into bite-sized insights and get answers to your
                            questions with just a click.
                        </p>
                        <button onClick={goToNextPage}>Get Started</button>
                    </div>
                    <div className="image-container">
                        <img src={logo} alt="Tutoring Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
