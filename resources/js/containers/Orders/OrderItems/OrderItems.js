import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const OrderItems = (props) => {
    let orderItemsHtml = null;
    if (props.orderItems) {
        orderItemsHtml = Object.keys(props.orderItems).map(orderItemKey => (
            <OrderItem key={props.orderItems[orderItemKey].id}
                       name={props.orderItems[orderItemKey].name} price={props.orderItems[orderItemKey].price}
                       quantity={props.orderItems[orderItemKey].quantity}
                       increased={() => props.quantityIncreased(orderItemKey)}
                       decreased={() => props.quantityDecreased(orderItemKey)}>
            </OrderItem>
        ));
    }
    return (
        <Auxiliary>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="d-flex ">
                        <table className="table table-responsive">
                            <tbody>
                            {orderItemsHtml}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Auxiliary>
    );
};
export default OrderItems;
