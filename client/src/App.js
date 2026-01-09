import logo from './logo.svg';
import './App.css';
import ArtCard from './Artcard';

function App() {
  const artList = [
    { id: 1, title: "Starry Night", artist: "Vincent", url: "https://placedog.net/500" },
    { id: 2, title: "Abstract Blue", artist: "Artist123", url: "https://placedog.net/501" },
    { id: 3, title: "Digital Portrait", artist: "ArtLover", url: "https://placedog.net/502" }
  ];
  return (
    <div className="App">
      <h1>Explore Art</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {artList.map(art => (
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
