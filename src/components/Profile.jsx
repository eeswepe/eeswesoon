import React from 'react';
import './Profile.css';
import CustomLine from './CustomLine.jsx';

const Profile = () => {
  return (
    <div className="container">
      <div className="Profile">
        <h2>The Dev's</h2>
        <img src="/profile.jpg" className="profile-img"></img>
        <div className="social-media">
          <h5 className="social-media-title">Contact me on</h5>
          <CustomLine />
          <div className="social-media-list">
            <img src="/github-icon.svg" className="social-media-icon"></img>
            <a href="https://github.com/eeswepe">eeswepe</a>
          </div>
          <div className="social-media-list">
          <img className="social-media-icon" src="/instagram-icon.svg"></img>
            <a href="https://www.instagram.com/eeswepe/">eeswepe</a>
          </div>
          <div className="social-media-list">
            <img className="social-media-icon" src="/x-icon.svg"></img>
            <a href="https://www.x.com/eeswepe/">eeswepe</a>
          </div>
          <div className="social-media-list">
            <img className="social-media-icon" src="/linkedin-icon.svg"></img>
            <a href="https://id.linkedin.com/in/singgih-permana-81a726230">eeswepe</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;