import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add other routes here if needed */}
    </Routes>
  );
};

export default App;
