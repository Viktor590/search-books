import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StartPage, SingleBookPages, ErrorPage } from '../pages';


import './app.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/singleBook/:bookId" element={<SingleBookPages />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
