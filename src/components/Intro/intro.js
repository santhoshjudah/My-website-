import React from 'react';
import './intro.css';
import hero from '../../assets/hero.png';
import bagimg from '../../assets/bagimg.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'm<span className='introName'> Santhosh</span> <br/>Full Stack Developer</span>
        <p className='introPara'>I am a skilled web developer with expericnce in creating <br/>visllay appealing and user friendly website</p>
        <Link><button className='btn'>
          <img src={bagimg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={hero} alt='bg' className='bg'/>

    </section>
  )
}

export default Intro