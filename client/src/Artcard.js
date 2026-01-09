// ArtCard.js
import React, { useState } from 'react';

function ArtCard({ title, artist, imageUrl }) {
    const [liked, setLiked] = useState(false);
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', margin: '10px', width: '250px' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{title}</h3>
            <p>By: {artist}</p>
            <button
                onClick={() => setLiked(!liked)}
                style={{
                    padding: '8px 15px',
                    cursor: 'pointer',
                    backgroundColor: liked ? '#ff4b5cff' : '#eee',
                    color: liked ? 'white' : 'black',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >

                {liked ? 'Liked ✨' : 'Like'}
            </button>
        </div>
    );
}

export default ArtCard;