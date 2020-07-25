import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuItem.css';
import Button from "../../../../components/UI/Button/Button";


const menuItem = (props) => (
    <div className="col-md-6">
        <div className="pricing-entry d-flex ">
            <div className="img" style={{backgroundImage: "url(" + props.image_url + ")"}}></div>
            <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                    <h3><span>{props.name}</span></h3>
                    <span className="price">${props.price.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p>{props.description}</p>
                    {/*<NavLink activeClassName="active" className="btn btn-white btn-outline-white" to={props.link} >Add to cart</NavLink>*/}
                    <Button btnType="btn btn-white btn-outline-white cart-btn-cls" clicked={props.added}>Add to cart</Button>
                </div>
            </div>
        </div>
    </div>
);

export default menuItem;
