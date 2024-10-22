import React from 'react';
import './resume.css';
import resume from '../../assets/resume.jpg'
import Santhosh from './Santhosh.pdf'

const Resume = () => {
  return (
    <section id='resume'>

        <div className='resumeContent'>
          <img src={resume} alt='resumeimage' className='resumeImg'/>
          <h1 className='resumeHead'>RESUME</h1>
          <p className='resumePara'>You can view my resume <a className='btn' href={Santhosh} download>Download</a></p>
        </div>
  
    </section>
  )
}

export default Resume