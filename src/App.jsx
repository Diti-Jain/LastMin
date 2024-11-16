// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage.jsx';
import Fileupload from './components/fileupload.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/file" element={<Fileupload />} />
      </Routes>
    </Router>
  );
}

export default App;