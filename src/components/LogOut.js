import React, { useEffect } from 'react';

const LogOut = () => {
    
  useEffect(() => {
    fetch('/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    .then(response => {
      if (response.redirected) {
        window.location.href = response('/login');
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
  }, []); // Add an empty dependency array to ensure this runs only once

  return (
    <div>Logging out...</div>
  );
};

export default LogOut;
