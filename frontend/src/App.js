import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
   // projects.push(`Novo projeto ${ Date.now() }`);
   // setProjects([...projects, `Novo projeto ${ Date.now() }`]);
   const response = await api.post('projects',{
    title : `Novo projeto ${ Date.now() }`,
    owner: "Jess"
   });
   const project = response.data;
   setProjects([...projects,project]);
    
  }
  return (
    <>
     
      <Header title="Projects">
      <ul>
          <li>Projects </li>
        </ul>
      </Header>
      <ul>
        { projects.map(({ id,title }) => <li key={id}>{title}</li> ) }
      </ul>
      <button onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;