import React from 'react';
import './App.css';

function App() {
  const username = "wildangbudhi";

  return (
    <>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@{username}</div>
      <button>Follow</button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
    </>
  );
}

export default App;
