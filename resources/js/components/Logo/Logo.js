import React from 'react';

import SiteLogo from '../../assets/images/logo.png';
import './Logo.css';

const Logo = (props) => (
    <div className="logo-img-nav" style={{height: props.height}}>
        <img src={SiteLogo} alt="Site Logo"/>
    </div>
);

export default Logo;
