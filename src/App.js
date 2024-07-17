import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './StarshipCard'; // Correct import path
import './style.css';
import backgroundVideo from './assets/background.mp4';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then(data => setStarships(data.results));
  }, []);

  return (
    <div className="App">
      <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Star Wars Starships</h1>
        <div className="starship-list">
          {starships.map((ship, index) => (
            <StarshipCard key={index} name={ship.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
