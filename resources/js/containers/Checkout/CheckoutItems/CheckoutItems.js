import React from 'react';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const CheckoutItems = (props) => {
    const checkoutItems = [];
    checkoutItems.push({
        id: 1,
        name: 'ALi',
        email: 'xyz@gmail.com',
        phnumber: '+92 3344963731',
        address: 'nasheman park lahore road',
        town: 'Sheikhupura',
        comments: 'be fast be fast be fast be fast be fast be fast be fast be fast be fast be fast be fast be fast be fast be fast be fast',
    });

    const checkoutItemsHtml = checkoutItems.map(checkoutItem => (
        <CheckoutItem key={checkoutItem.id} name={checkoutItem.name} email={checkoutItem.email}
                   phnumber={checkoutItem.phnumber} address={checkoutItem.address} comments={checkoutItem.comments}
                      link={checkoutItem.link} ></CheckoutItem>
    ));
    return (
        <Auxiliary>
            {checkoutItemsHtml}
        </Auxiliary>
    );
};
export default CheckoutItems;
