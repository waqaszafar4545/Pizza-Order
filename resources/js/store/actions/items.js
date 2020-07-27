import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addItemToCart = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        item: {
            id: item.id,
            name: item.name,
            price: item.price,
            totalPrice: item.price,
            quantity: 1,
        }
    };
};

export const removeItemFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        item: item
    };
};
export const quantityIncrease = (itemId) => {
    return {
        type: actionTypes.QUANTITY_INCREASE,
        itemId: itemId
    };
};
export const quantityDecrease = (itemId) => {
    return {
        type: actionTypes.QUANTITY_DECREASE,
        itemId: itemId
    };
};
export const setItems = (items) => {
    return {
        type: actionTypes.SET_ITEMS,
        items: items
    };
};

export const fetchItemsFailed = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAILED
    };
};

export const initItems = () => {
    return dispatch => {
        axios.post('/api/get_products')
            .then(response => {
                console.log(response.data, "API Response");
                dispatch(setItems(response.data.data));
            })
            .catch(error => {
                dispatch(fetchItemsFailed());
            });
    };
};
