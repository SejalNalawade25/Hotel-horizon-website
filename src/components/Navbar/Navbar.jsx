import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky ] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggelMenu =() =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallary</Link></li>
            <li><Link to='rooms' smooth={true} offset={-260} duration={500}>Rooms</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li> <Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link> </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggelMenu}/>
    </nav>
  )
}

export default Navbar
