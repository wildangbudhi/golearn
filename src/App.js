import React, { useState } from 'react';
import './App.css';

const Post = ( props ) => (
  <React.Fragment>
    <img src={props.src} alt="profile picture" />
  </React.Fragment>
)

const Profile = ( props ) => {

  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={ () => setIsFollowed( !isFollowed ) } >{ isFollowed ? "Unfollow" : "Follow" }</button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      <Post src={props.src} />
    </React.Fragment>
  )
};

export default function App() {
  const username = "wildangbudhi";
  const src = "https://via.placeholder.com/300";
  return <Profile username={username} src={src} />
}
