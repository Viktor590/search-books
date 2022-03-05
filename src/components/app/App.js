import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StartPage } from '../pages';
import { SingleBookPages } from '../pages';

import './app.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/singleBook/:bookId" element={<SingleBookPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
