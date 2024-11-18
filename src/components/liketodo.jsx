import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function App() {
  const [videoLink, setVideoLink] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    console.log('Video link:', videoLink);
  };

  const goToSummaryPage = () => {
    navigate('/summary'); // Navigate to the summary page
  };

  return (
    <div>
      <h1>What Would You Like to Do?</h1>
      <button onClick={goToSummaryPage}>Summarize Content</button> {/* Added onClick */}
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

export default App;
