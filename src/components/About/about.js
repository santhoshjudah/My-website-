import React from 'react';
import './about.css';
import about from '../../assets/about.png';

const About = () => {
  return (
    <section id='about'>
    <div className='aboutContent'>
    <img src={about} alt='aboutimage' className='aboutImg'/>
        <h1 className='aboutHead'>ABOUT</h1>
        <p className='aboutPara'> Dynamic and detail-oriented Full Stack Developer with 4 months of experience <br/>in designing, developing, and deploying robust web applications.<br/><br/>
         Proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Java, and SQL/NoSQL databases.<br/><br/> Adept at problem-solving and working collaboratively in Agile environments to deliver high-quality, scalable software solutions.
         Passionate about continuous learning and staying updated with the latest industry trends and technologies.</p>
    </div>

    </section>
  )
}

export default About