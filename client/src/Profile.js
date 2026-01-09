import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState("Artist Name");
    const [bio, setBio] = useState("Digital Artist | Lover of Colors");
    const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");

    // This function handles the image upload from your device
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file)); // Creates a temporary link to your file
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            <h2>My Profile</h2>

            {/* Profile Picture */}
            <img
                src={profilePic}
                alt="Profile"
                style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #ddd' }}
            />
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: '10px' }} />

            {/* Edit Name & Bio */}
            <div style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ display: 'block', margin: '10px auto', padding: '10px', fontSize: '1.2rem' }}
                />
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    style={{ width: '80%', padding: '10px' }}
                />
            </div>

            <hr style={{ margin: '40px 0' }} />
            <h3>My Posted Arts</h3>
            <p style={{ color: '#888' }}>You haven't posted any art yet!</p>
        </div>
    );
}

export default Profile;