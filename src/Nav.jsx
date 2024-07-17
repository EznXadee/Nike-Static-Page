import React from 'react';
import nike from './assets/nike.png';
import './nav.css';
import Button from '@mui/material/Button';
function Nav() {  // Use uppercase for the component name
  return (
    <>
      <nav id="nav">
       <img id="nike-logo" src={nike} alt="nike" />
       <div className='nav-components'>
          <a>Menu</a>
          <a>Location</a>
          <a>About</a>
          <a>Contact</a>
       </div>
       <Button variant="contained" id="login">Login</Button>
       </nav>
    </>
  );
}

export default Nav;
