// src/App.js
import React from 'react';
import DisplayOptions from './components/DisplayOptions';
import Board from './components/Board'; // The main Kanban board component
import './App.css'; // Global styles

const App = () => {
  return (
    <div className="App">
      <main>
        
        <Board /> {/* Directly rendering the Kanban board */}
      </main>
    </div>
  );
};

export default App;
