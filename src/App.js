import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then(data => setStarships(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-list">
        {starships.map((ship, index) => (
          <StarshipCard key={index} name={ship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

