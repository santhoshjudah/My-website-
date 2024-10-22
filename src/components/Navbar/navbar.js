import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>

        <img src={logo} alt='logo' className='logo'/>

        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Resume</Link>

        </div>

        <button className='dekstopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt='contact' className='dekstopMenuImg'/>Contact Me</button>


            <img src={menu} alt='Menu' className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>

        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>

            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'   onClick={()=>setShowMenu(!false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'   onClick={()=>setShowMenu(!false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'  onClick={()=>setShowMenu(!false)}>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(!false)}>Project</Link>
            <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'  onClick={()=>setShowMenu(!false)}>Resume</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(!false)}>Contact</Link>

        </div>
    </nav>
  )
}

export default Navbar