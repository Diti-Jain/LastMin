import React from 'react';
import styles from './homepage.module.css';  // Import CSS Module
import logo from '../assets/image1.png';

const HomePage = () => {
    const goToNextPage = () => {
        window.location.href = "file"; // Update URL as needed
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <div className={styles.logo}>LastMin</div>
                <button onClick={goToNextPage} className={styles.button}>Get Started</button>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h1>LastMin</h1>
                        <h2>Your Last Minute Tutor</h2>
                        <p>
                            Turn PDFs and videos into bite-sized insights and get answers to your
                            questions with just a click.
                        </p>
                        <button onClick={goToNextPage} className={styles.button}>Get Started</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={logo} alt="Tutoring Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
