import React, { useState } from 'react';
import './fileupload.css'; // Importing CSS styles

const VideoUpload = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [videoLink, setVideoLink] = useState('');

    const handleUpload = () => {
        if (videoFile) {
            alert("Upload functionality needs to be implemented.");
            // Implement upload logic here
        } else {
            alert("Please select a video file to upload.");
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
                        <h2>Upload Files</h2>
                        <input 
                            type="file" 
                            accept="video/*" 
                            onChange={(e) => setVideoFile(e.target.files[0])}
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