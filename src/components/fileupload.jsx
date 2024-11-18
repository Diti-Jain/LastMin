import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './fileupload.css'; // Importing CSS styles
import axios from "axios";

function VideoUpload() {
    const [fileInputs, setFileInputs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [videoLink, setVideoLink] = useState("");

  const handleFileChange = (event) => {
    setFileInputs([...event.target.files]);
  };

  const handleFileSubmit = async () => {
    if (fileInputs.length > 0) {
      const formData = new FormData();
      fileInputs.forEach((file) => formData.append("files", file));
      setLoading(true);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/process_files",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        navigate("/liketodo", { state: { text: response.data.text } });
      } catch (error) {
        console.error("Error processing the files:", error);
        alert("Error processing the files. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("No files uploaded. Please upload at least one file.");
    }
  };

  const handleVideoSubmit = async () => {
    if (videoLink) {
      setLoading(true); // Start loading when video submit begins
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/summarize_youtube",
          { url: videoLink },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate("/liketodo", {
          state: { transcript: response.data.transcript },
        });
      } catch (error) {
        console.error("Error processing the video link:", error);
        alert("Error processing the video link. Please try again.");
      } finally {
        setLoading(false); // Stop loading once API call finishes
      }
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
                            onChange={handleFileChange} // Updated to setPdfFile
                        />
                        <button onClick={handleFileSubmit}>Upload</button>
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
                        <button onClick={handleVideoSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUpload;
