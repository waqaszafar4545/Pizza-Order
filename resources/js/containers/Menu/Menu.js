import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import MenuItems from './MenuItems/MenuItems';
import {NavLink} from "react-router-dom";
import {logout} from "../../store/actions";
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        console.log("Jholy laal");
    }

    state = {
        purchasing: false,
        purchasable: false,
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }
    componentDidMount() {
        this.props.onInitItems();
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError");
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log("componentDidCatch");
    }
    updatePurchaseState(items) {
        const itemCount = items ? Object.keys(items).length : 0;
        return itemCount > 0;
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/orders');
    }

    render() {
        let menuItems = this.props.error ? <p>Menus can't be loaded!</p> : <Spinner/>;
        if (this.props.items) {
            menuItems = <MenuItems itemAdded={this.props.onItemAdded} items={this.props.items}></MenuItems>
        }
        return (
            <Auxiliary>
                <section>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center">
                                <h2 className="mb-4">Our Menu</h2>
                                <p className="flip">
                                    <span className="deg1"></span>
                                    <span className="deg2"></span>
                                    <span className="deg3"></span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {menuItems}
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                disabled={!this.updatePurchaseState(this.props.cartItems)}
                                onClick={this.purchaseContinueHandler}>ORDER NOW
                            </button>
                        </div>
                    </div>
                </section>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        cartItems: state.items.cartItems,
        totalPrice: state.items.totalPrice,
        error: state.items.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (item) => dispatch(actions.addItemToCart(item)),
        onInitItems: () => dispatch(actions.initItems()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Menu, axios));
