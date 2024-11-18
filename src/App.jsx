// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage.jsx';
import Fileupload from './components/fileupload.jsx'
import Summary from './components/summary.jsx'; 
import Liketodo from './components/liketodo.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/file" element={<Fileupload />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/liketodo" element={<Liketodo />} />

      </Routes>
    </Router>
  );
}

export default App;