import React from 'react';
import Logo from '../assets/logo.jpeg';
import './header.css';

function Header() {
  return (
    <header>

      <div className='logo'>
        <img src={Logo} alt='logo'/>
        <span>Task Check</span>
      </div>
      <div className='theme'>
        <span className='light'></span>
        <span className='medium'></span>
        <span className='dark activeTheme' ></span>

      </div>
    
    </header>
  )
}

export default Header
