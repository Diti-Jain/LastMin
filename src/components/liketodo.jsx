import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './liketodo.css'; // Import the specific CSS for this page

function LikeTodoPage() {
  const [videoLink, setVideoLink] = useState('');
  const navigate = useNavigate();

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Video link:', videoLink);
  };

  const goToSummaryPage = () => {
    navigate('/summary');
  };

  return (
    <div className="container">
      <h1>What Would You Like to Do?</h1>
      <button onClick={goToSummaryPage}>Summarize Content</button>
      <p>OR</p>
      <h2>Combined summary of PDF and Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={videoLink}
          onChange={handleVideoLinkChange}
          placeholder="Paste video link here..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LikeTodoPage;
