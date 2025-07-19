import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './App.css'; // Add this line to include App-specific styles

const App = () => {
  return (
    <div className="app-container"> {/* Add a class for styling */}
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;