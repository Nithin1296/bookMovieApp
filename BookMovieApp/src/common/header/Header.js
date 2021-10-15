import React, {Fragment,div, useEffect, useState} from 'react';
import './Header.css';
import { ReactComponent as logo } from './assets/logoComponent.js';

function Header() {
    return(
        <div className='logo'>
            <logo/>
        </div>
    );
}
export default Header;
