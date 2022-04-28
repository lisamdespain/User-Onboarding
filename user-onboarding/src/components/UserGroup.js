import React from 'react';



export default function Users({ details }) {
    if (!details) {
      return <h3>Bringing in user info</h3>;
    }
  
    return (
        <div>
        <h2>Welcome, {details.first_name} {details.last_name}</h2>
        <p>Email: {details.email}</p>
        </div>
      )
  }
  
