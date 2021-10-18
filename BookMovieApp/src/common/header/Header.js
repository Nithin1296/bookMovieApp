import React, { Component, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';

function Header(props) {
    
  const [counter,setCounter] = useState(0);
  const [username,setName] = useState("");

    return(

        <div>
        <div className='logo'>
            <img src = {logo} className= 'logo' alt='logo'/>
        </div>
        <div className='loginButton'>
            <Button variant="contained" color="default" >Login</Button>
        </div>
        <div className='loginButton'>
            <Button variant="contained" color="default" >Logout</Button>
        </div>
        </div>
    );
}


export default Header;
