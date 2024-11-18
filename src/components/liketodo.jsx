import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './liketodo.css'; // Import the specific CSS for this page
import axios from "axios";


function LikeTodoPage() {
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const [combinedText, setCombinedText] = useState(location.state?.text || "");

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
        const videoTranscript = response.data.transcript;
        setCombinedText((prevText) => prevText + "\n" + videoTranscript);
        alert("Video link submitted and combined with PDF content!");
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
    <div className="container">
      <h1>What Would You Like to Do?</h1>
      <button onClick={handleSummarizeClick}>Summarize Content</button>
      <p>OR</p>
      <h2>Combined summary of PDF and Video</h2>
        <input
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="Paste video link here..."
        />
        <button type="submit" onClick={handleVideoSubmit}>Submit</button>
    </div>
  );
}

export default LikeTodoPage;
