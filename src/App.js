import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header.js';
import ListContent from './components/listContent.js';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <main>
          <ListContent />
        </main>
      </div>
    </div>
  );
}

export default App;
