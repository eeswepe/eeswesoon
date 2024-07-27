import React from 'react';
import './Project.css';
import CustomLine from './CustomLine.jsx';
import Card from './Card.jsx';
import {getData} from '../utils/ProjectData.js';

const Project = () => {

  const projectData = getData();
  
  function handleMoreProject(){window.open('https://github.com/eeswepe?tab=repositories', '_blank' )    }
  
  return (
    <div className="container">
      <div className="Project" id="Project">
        <div className="project-header">
          <h2 className="my-project-title">My Project</h2>
         <CustomLine />
        </div>       
        <div className="project-display">
          {projectData.map((project) =>
            <Card key={project.id} title={project.title} description={project.description} isDeployed={project.isDeployed} demoLink={project.demoLink} sourceCode={project.sourceCode} stack={project.stack}/>
          )}
          <div className="more-project">
            <button onClick={handleMoreProject}>View More Project</button>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default Project;