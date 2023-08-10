import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const LikeButton = () => {
  const [count, setCount] = useState(999);
  const handleClick = () => setCount(prev => prev + 1);

  return <span className='likeButton' onClick={handleClick}>♥ {count}</span>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
