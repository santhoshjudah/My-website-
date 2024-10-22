import React from 'react';
import './projects.css';
import puzzlepic from '../../assets/puzzlepic.jpg';
import todolist from '../../assets/todolist.avif';
import drag from '../../assets/drag.jpg';


const Projects = () => {

  const config = {
    project : 
      {
        link1: 'https://sliding-puzzle-jade.vercel.app/' ,   
        link2: 'https://todolist-two-woad.vercel.app/', 
        link3: 'https://drag-and-drop-roan.vercel.app/',
      }  
  }

  return (
    <section id='project'>

        <div className='projetContent'>

            <h1 className='projectHead'>PROJECTS</h1>
            <p className='projectPara'>These are some of my project. I have built these with React.js and css. Check it out.</p>
            <div>
            <a href={config.project.link1}><img src={puzzlepic} alt='' className='projectImgpuzzle'/></a> 
            <a href={config.project.link2}><img src={todolist} alt='' className='projectImgTodolist'/></a>
            <a href={config.project.link3}><img src={drag} alt='' className='projectImgDragdrop'/></a>
            </div>
        </div>
    </section>
  )
}

export default Projects