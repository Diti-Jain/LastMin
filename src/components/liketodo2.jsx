import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './liketodo.css'; // Import the specific CSS for this page
import axios from "axios";

function LikeTodoPage() {
  const [fileInputs,setFileInputs] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const [combinedText, setCombinedText] = useState(
    location.state?.transcript || ""
  );

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
        const newText = response.data.text;
        setCombinedText((prevText) => prevText + "\n" + newText);
        alert("Files processed and combined with PDF content!");
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

  const handleSummarizeClick = async () => {
    setLoading(true); // Start loading when summarization begins
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/summarize",
        { content: combinedText },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/summary", {
        state: { summary: response.data.summary, combinedText: combinedText },
      });
    } catch (error) {
      console.error("Error cannot summarize the content", error);
      alert("Error cannot summarize the content. Please try again.");
    } finally {
      setLoading(false); // Stop loading once API call finishes
    }
  };

  return (
    <div className="liketodo-container">
      <h1>What Would You Like to Do?</h1>
      <button onClick={handleSummarizeClick}>Summarize Content</button>
      <p>OR</p>
      <h2>Combined summary of PDF and Video</h2>
      <input
        type="file"
        multiple
        onChange={(e) => setFileInputs([...e.target.value])}
      />
      <button type="submit" onClick={handleFileSubmit}>Submit</button>
    </div>
  );
}

export default LikeTodoPage;
