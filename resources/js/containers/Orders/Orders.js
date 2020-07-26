import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import OrderItems from './OrderItems/OrderItems';
import OrderInvoiceSummary from './OrderInvoiceSummary/OrderInvoiceSummary';
import {NavLink} from "react-router-dom";
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    componentDidMount() {
        console.log(this.props.cartItems, "orders componentDidMount");
        if (!this.props.cartItems) {
            this.props.history.push('/menu');
        }
    }

    updateOrderInvoiceSummary(items) {
        let orderInvoiceSummary = null;
        let subTotal = 0;
        if (items) {
            subTotal = Object.keys(items).map(orderItemKey => {
                return items[orderItemKey];
            })
                .reduce((sum, el) => {
                    const itemPrice = el.quantity * el.price;
                    return sum + itemPrice;
                }, 0);
        }
        const total = parseFloat(subTotal) + parseFloat(this.props.deliveryCharges);
        const euroTotal = total*1.17;
        orderInvoiceSummary = {
            subtotal: subTotal.toFixed(2),
            deliveryCharges: this.props.deliveryCharges.toFixed(2),
            total: total.toFixed(2),
            euroTotal: euroTotal.toFixed(2)
        }
        return orderInvoiceSummary;
    }
    orderContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        return (
            <Auxiliary>
                <section>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center">
                                <h2 className="mb-4">Order</h2>
                                <p className="flip">
                                    <span className="deg1"></span><span className="deg2"></span><span
                                    className="deg3"></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <OrderItems orderItems={this.props.cartItems}
                                        quantityIncreased={this.props.onQuantityIncrease}
                                        quantityDecreased={this.props.onQuantityDecrease}
                                        orderInvoiceSummary={this.props.cartItems}
                            ></OrderItems>
                        </div>
                        <div className="col-md-4">
                            <OrderInvoiceSummary
                                orderInvoiceSummary={this.updateOrderInvoiceSummary(this.props.cartItems)}>
                            </OrderInvoiceSummary>
                            <div className="d-flex justify-content-center">
                                <Button btnType="btn btn-white btn-outline-white cart-btn-cls" clicked={this.orderContinueHandler}>Checkout</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        cartItems: state.items.cartItems,
        deliveryCharges: state.order.deliveryCharges,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onQuantityIncrease: (itemId) => dispatch(actions.quantityIncrease(itemId)),
        onQuantityDecrease: (itemId) => dispatch(actions.quantityDecrease(itemId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
