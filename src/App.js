import React from 'react';
import './App.scss';
import Header from './components/header.js';
import ListContent from './container/listContent.js';
import ReviewContent from './container/reviewContent.js';
import { BrowserRouter, Route  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <main>
            <Route exact path="/" component={ListContent} />
            <Route path="/review/:id" component={ReviewContent} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
