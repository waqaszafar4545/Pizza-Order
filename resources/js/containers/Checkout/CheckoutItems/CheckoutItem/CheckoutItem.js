import React from 'react';
import {NavLink} from 'react-router-dom';


const checkoutItem = (props) => (

    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="d-flex ">
                <table className="table table-responsive">
                    <tbody>
                    <tr>
                        <td className="">
                            <h5><span>{props.name}</span></h5>
                        </td>
                        <td className="">
                            <span className="price">{props.email}</span>
                        </td>
                        <td className="">
                            <div className="qty-btn d-flex ">
                                <p>1 {props.phnumber}</p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

);

export default checkoutItem;
