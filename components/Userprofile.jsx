// Userprofile.jsx
import React, { useEffect, useState } from 'react';

const Userprofile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Retrieve user details from local storage
    const storedUser = localStorage.getItem('user');
    console.log('Stored User:', storedUser);

    const user = storedUser ? JSON.parse(storedUser) : null;
    console.log('User Details:', user);

    setUserDetails(user);
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userDetails ? (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {/* Add other user details as needed */}
        </div>
      ) : (
        <p>User details not found. Please log in.</p>
      )}
    </div>
  );
};

export default Userprofile;
