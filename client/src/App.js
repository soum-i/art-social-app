import './App.css';
import ArtCard from './Artcard';
import React, { useState } from 'react';
import Profile from './Profile';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState("explore");

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

      <nav style={{ padding: '10px', background: '#333' }}>
        <button onClick={() => setPage("explore")}>Explore</button>
        <button onClick={() => setPage("me")}>Me Section</button>
      </nav>

      {page === "explore" ? (
        <>
          <input
            type="text"
            placeholder="Search artist..."
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
        </>
      ) : (
        <Profile />
      )}
    </div>
  );
}

export default App;
