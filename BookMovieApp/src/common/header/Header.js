import React, {Fragment,div, useEffect, useState} from 'react';
import './Header.css';


const Header = function (props) {

    return (
        <Fragment>
        <div className="header">
            {props.heading}
        </div>
            <h4>&nbsp; &nbsp; Welcome user , You are from  </h4>
        </Fragment>
    )
}

export default Header;
