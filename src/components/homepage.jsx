import React from 'react';
import styles from './homepage.module.css';  // Import CSS Module
import logo from '../assets/image1.png';  // Import the logo image

const HomePage = () => {
    const goToNextPage = () => {
        window.location.href = "file";  // Update URL or routing logic as needed
    };

    return (
        <div className={styles.wrapper}>
            {/* Top bar with logo and Get Started button */}
            <div className={styles.topBar}>
                <div className={styles.logo}>LastMin</div>
                <button onClick={goToNextPage} className={styles.button}>Get Started</button>
            </div>

            {/* Main content section */}
            <div className={styles.contentWrapper}>
                <div className={styles.container}>
                    {/* Text content section */}
                    <div className={styles.textContent}>
                        <h1>LastMin</h1>
                        <h2>Your Last Minute Tutor</h2>
                        <p>
                            Turn PDFs and videos into bite-sized insights and get answers to your
                            questions with just a click.
                        </p>
                        {/* Another Get Started button */}
                        <button onClick={goToNextPage} className={styles.button}>Get Started</button>
                    </div>

                    {/* Image content section */}
                    <div className={styles.imageContainer}>
                        <img src={logo} alt="Tutoring Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
