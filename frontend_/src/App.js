import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import backgroundImage from  './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  
  function handleAddProject() {
   // projects.push(`Novo projeto ${ Date.now() }`);
    setProjects([...projects, `Novo projeto ${ Date.now() }`]);
    console.log(projects);
  }
  return (
    <>
     
      <Header title="Projects">
        <img width={300} src={backgroundImage} alt=""/>
      <ul>
          <li>Projects </li>
        </ul>
      </Header>
      <ul>
        { projects.map(project => <li key={project}>{ project }</li> ) }
      </ul>
      <button onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;