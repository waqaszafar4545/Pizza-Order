import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="nav nav-sidebar">
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/auth">Login</NavigationItem>
    </ul>
);

export default navigationItems;
