import logo from './logo.svg';
import './App.css';
import ArtCard from './Artcard';
import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const artList = [
    { id: 1, title: "Starry Night", artist: "Vincent", url: "https://placedog.net/500" },
    { id: 2, title: "Abstract Blue", artist: "Artist123", url: "https://placedog.net/501" },
    { id: 3, title: "Digital Portrait", artist: "ArtLover", url: "https://placedog.net/502" }
  ];

  const filteredArt = artList.filter((art) =>
    art.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Explore Art</h1>

      <input
        type="text"
        placeholder="Search user..."
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredArt.map(art => (
          <ArtCard
            key={art.id}
            title={art.title}
            artist={art.artist}
            imageUrl={art.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
