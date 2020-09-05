import React, { useState } from 'react';
import './index.css';

const Post = ( { src } ) => ( <img src={src} alt="profile" /> )

const Profile = ( props ) => {
  const { username, src } = props;
  const [isFollowed, setIsFollowed] = useState(false);
  const [inputAccount, setInputAccount] = useState(false);
  const posts = [...Array(5)];
  const postCount = posts.length; 

  return (
    <React.Fragment>
      <input onChange={ ( { target: { value } } ) => {
        setInputAccount( value )
      } } placeholder="search profile" />
      <div>Search Result for account: {inputAccount}</div>
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div>@{username}</div>
      <button onClick={ () => setIsFollowed( !isFollowed ) } >{ isFollowed ? "Unfollow" : "Follow" }</button>
      <div>{ postCount } Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      { !postCount ? (
        <div>No Post</div>
      ) : (
        <div className="posts" >
          {posts.map( ( _, idx ) => ( 
            <Post src={src} key={idx} /> 
          ) )}
        </div>
        
      )}
      
       
      
    </React.Fragment>
  )
};

export default function App() {
  const username = "wildangbudhi";
  const src = "https://via.placeholder.com/300";
  return <Profile username={username} src={src} />
}
