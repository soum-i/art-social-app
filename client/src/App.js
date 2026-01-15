import './App.css';
import ArtCard from './Artcard';
import React, { useState } from 'react';
import Profile from './Profile';

// App.js
function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  const artList = [
    { id: 1, title: "Starry Night", artist: "abc1", url: "https://placedog.net/500" },
    { id: 2, title: "Mountain View", artist: "abc2", url: "https://placedog.net/501" },
    { id: 3, title: "Cherry Blossom", artist: "abc3", url: "https://placedog.net/502" }
  ];

  const filteredArt = artList.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9e6f2' }}>

      {/* LEFT SIDEBAR */}
      <div style={{ width: '100px', backgroundColor: '#8e628e', color: 'white', display: 'flex', flexDirection: 'column', padding: '20px 10px', alignItems: 'center', gap: '20px' }}>
        <button onClick={() => setPage("home")} style={sidebarBtn}>home</button>
        <button onClick={() => setPage("explore")} style={sidebarBtn}>explore</button>
        <button style={sidebarBtn}>notification</button>
        <button onClick={() => setPage("search")} style={sidebarBtn}>search</button>
        <button style={sidebarBtn}>post</button>
        <button onClick={() => setPage("me")} style={sidebarBtn}>profile</button>
        <div style={{ marginTop: 'auto' }}>
          <button style={sidebarBtn}>setting</button>
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Title Bar */}
        <div style={{ backgroundColor: 'white', border: '2px solid #b38db3', borderRadius: '50px', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ margin: 0, fontFamily: 'serif', color: '#555' }}>ART SHARE</h1>
        </div>

        {/* Art Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {page === "home" && artList.map(art => (
            <ArtCard key={art.id} title={art.title} artist={art.artist} imageUrl={art.url} />
          ))}

          {page === "search" && (
            <div style={{ textAlign: 'center', width: '100%' }}>
              <input
                type="text"
                placeholder="Search user..."
                style={{ padding: '10px', width: '300px', borderRadius: '20px', border: '1px solid #ddd', marginBottom: '20px' }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
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
          )}

          {page === "me" && <Profile />}
        </div>
      </div>
    </div>
  );
}

// Simple style object for sidebar buttons
const sidebarBtn = { background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '14px' };

export default App;
