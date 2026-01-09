// ArtCard.js
import React from 'react';

function ArtCard({ title, artist, imageUrl }) {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', margin: '10px', width: '250px' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{title}</h3>
            <p>By: {artist}</p>
            <button>Like ❤️</button>
        </div>
    );
}

export default ArtCard;