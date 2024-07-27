import React from 'react';
import './Jumbotron.css';
import CustomLine from './CustomLine.jsx';

const Jumbotron = () => {
  
  function handleExploreButton(e){
    e.preventDefault();
    const targetElement = document.getElementById('Project');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h2 className="welcoming-text">Welcome To <span className="logo-type">EESWEVERSE</span></h2>
        <CustomLine />
        <p className="welcoming-sentences">Here, you can explore the various projects I've undertaken during my journey as a junior developer. I hope you enjoy browsing through my work and find it inspiring!</p>
        <CustomLine />
        <button className="explore-button" onClick={handleExploreButton}>Explore More!!!</button>
      </div>
    </div>
  );
};

export default Jumbotron;