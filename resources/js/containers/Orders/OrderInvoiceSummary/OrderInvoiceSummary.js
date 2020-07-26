import React from 'react';

const orderInvoiceSummary = (props) => (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="">
                <table className="table table-responsive">
                    <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td><p><span>{props.subtotal}</span></p></td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td><span className="">{props.deliveryCharges}</span></td>
                    </tr>
                    <tr>
                        <td><h5>Total</h5></td>
                        <td><h5>{props.subtotal+props.deliveryCharges}</h5></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

);

export default orderInvoiceSummary;
