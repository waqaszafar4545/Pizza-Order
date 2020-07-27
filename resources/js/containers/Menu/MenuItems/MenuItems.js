import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const MenuItems = (props) => {
    let menuItems = Object.keys(props.items)
        .map(menuKey => (
            <MenuItem key={props.items[menuKey].id} image_url={props.items[menuKey].image.path}
                      name={props.items[menuKey].name} price={parseFloat(props.items[menuKey].price)}
                      description={props.items[menuKey].description}
                      added={() => props.itemAdded(props.items[menuKey])}></MenuItem>
        ));

    return (
        <Auxiliary>
            {menuItems}
        </Auxiliary>
    );
};
export default MenuItems;
