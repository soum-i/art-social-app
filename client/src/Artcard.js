// ArtCard.js
import React, { useState } from 'react';

function ArtCard({ title, artist, imageUrl }) {
    const [liked, setLiked] = useState(false);
    return (
        <div style={{
            backgroundColor: '#c7b3e0',
            borderRadius: '20px',
            padding: '15px',
            width: '220px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
        }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} />
            <p style={{ margin: '15px 0 5px' }}>by: {artist}</p>
            <button
                onClick={() => setLiked(!liked)}
                style={{
                    backgroundColor: 'white',
                    border: 'none',
                    padding: '5px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    color: liked ? 'red' : 'gray'
                }}
            >
                {liked ? 'Liked' : 'Like'}
            </button>
        </div>
    );
}

export default ArtCard;