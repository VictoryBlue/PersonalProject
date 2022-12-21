import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import Review from './Review';

function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>our Reviews</h2>
          <div className="underline"></div>
          <Review />
        </div>
      </div>
    </main>
  );
}

export default App;
