import React from 'react';
import './Card.css';
  
const Card = ({title, description, isDeployed, demoLink, sourceCode, stack}) => {

  function handlePlayDemoClick(e){
    e.preventDefault();
    window.open(demoLink, '_blank');
  }
  
  function handleSourceCodeClick(e){
    e.preventDefault();
    window.open(sourceCode, '_blank');
  }
  
  return (
    <div className="card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p><b>Stack:</b></p>
      <p>{stack}</p>
      {isDeployed ? 
        <button className="play-button" onClick={handlePlayDemoClick}><span className="material-symbols-outlined">play_arrow</span>Play Demo</button>
        : 
        <button className="play-button" disabled>Demo Unavailable</button>
      }
      <button className="source-code-button" onClick={handleSourceCodeClick}><span className="material-symbols-outlined">code_blocks</span>Source Code</button>
    </div>
  );
};

export default Card;