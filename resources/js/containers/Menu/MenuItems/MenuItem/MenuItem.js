import React from 'react';
import './MenuItem.css';
import Button from "../../../../components/UI/Button/Button";

const menuItem = (props) => (

    <div className="col-md-6">
        <div className="pricing-entry d-flex ">
            <div className="img" style={{backgroundImage: "url(images/" + props.image_url + ")"}}></div>
            <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                    <h3><span>{props.name}</span></h3>
                    <span className="price">${props.price.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p>{props.description}</p>
                    <Button btnType="btn btn-white btn-outline-white cart-btn-cls" clicked={props.added}>Add to
                        cart</Button>
                </div>
            </div>
        </div>
    </div>
);

export default menuItem;
