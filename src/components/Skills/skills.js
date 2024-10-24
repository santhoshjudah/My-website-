import React from 'react'
import './skills.css'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import java from '../../assets/java.png';
import spring from '../../assets/spring.png';
import mysql from '../../assets/mysql.png';
import boot from '../../assets/boot.png';


const Skill = () => {
  return (
    <section id='skills'>
      
    <div className='skillContent'>

    <h1 className='skillHead'>SKILLS</h1> 
    <p className='skillPara'>    
            FRONTEND SKILLS:<br/>
            🟣HTML5<br/>
            🟣CSS3<br/>
            🟣JavaScript (including frameworks like React, redux )<br/>
            🟣frameworks: Bootstrap, Material-UI, or other CSS <br/>
            🟣UI/UX principles<br/>
            🟣Responsive Web Design<br/>
            🟣github(version control)<br/><br/>

    BACKEND SKILLS:<br/>
    🟡Programming languages:<br/>
    - Java<br/>
    🟡Frameworks:<br/>
    - Spring Boot (Java)<br/>

    🟡Database:<br/>
    - Relational databases (MySQL, PostgreSQL)<br/>
    </p>

    <div className='skillImg'>
    <img src={html} alt='html' className='htmlImg'/>
    <img src={css} alt='css' className='cssImg'/>
    <img src={js} alt='js' className='jsImg'/>
    <img src={react} alt='react' className='reactImg'/>
    <img src={java} alt='java' className='javaImg'/>
    <img src={spring} alt='spring' className='springImg'/>
    <img src={mysql} alt='mysql' className='mysqlImg'/>
    <img src={boot} alt='mysql' className='bootImg'/>
    </div>

      </div>

    </section>
  )
}

export default Skill