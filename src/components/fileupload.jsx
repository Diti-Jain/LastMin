import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './fileupload.css'; // Importing CSS styles

const VideoUpload = () => {
    const [pdfFile, setPdfFile] = useState(null); // Updated to pdfFile
    const [videoLink, setVideoLink] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleUpload = () => {
        if (pdfFile) {
            // Navigate to the Summary page on successful file selection
            navigate('/liketodo');
        } else {
            alert("Please select a PDF file to upload.");
        }
    };

    const handleLink = () => {
        if (videoLink) {
            alert("Link submission functionality needs to be implemented.");
            // Implement link submission logic here
        } else {
            alert("Please enter a video link.");
        }
    };

    return (
        <div className="wrapper">
            <h1>What would you like to do?</h1>
            <div className="outer-container">
                <div className="container">
                    <div className="box">
                        <h2>Upload PDF Files</h2> {/* Updated label */}
                        <input 
                            type="file" 
                            accept="application/pdf" // Updated to accept only PDF files
                            onChange={(e) => setPdfFile(e.target.files[0])} // Updated to setPdfFile
                        />
                        <button onClick={handleUpload}>Upload</button>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h2>Enter Video Link</h2>
                        <input 
                            type="text" 
                            placeholder="Enter video link" 
                            value={videoLink}
                            onChange={(e) => setVideoLink(e.target.value)}
                        />
                        <button onClick={handleLink}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUpload;
