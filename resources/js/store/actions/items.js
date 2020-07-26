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
export const quantityIncrease = (itemId ) => {
    return {
        type: actionTypes.QUANTITY_INCREASE,
        itemId: itemId
    };
};
export const quantityDecrease = ( itemId ) => {
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
        const items = [];
        items.push({
            id: 1,
            name: 'Pakistani Pizza',
            price: 3.00,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-1.jpg',
            link: '/order',
        });
        items.push({
            id: 2,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-2.jpg',
            link: '/order',
        });

        items.push({
            id: 3,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-3.jpg',
            link: '/dashboard',
        });
        items.push({
            id: 4,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-4.jpg',
            link: '/auth',
        });
        items.push({
            id: 5,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-5.jpg',
            link: '/',
        });
        items.push({
            id: 6,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-6.jpg',
            link: '/',
        });
        items.push({
            id: 7,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-7.jpg',
            link: '/',
        });
        items.push({
            id: 8,
            name: 'Italian Pizza',
            price: 2.90,
            description: 'A small river named Duden flows by their place and supplies',
            image_url: 'images/pizza-8.jpg',
            link: '/',
        });
        setTimeout(
            () => dispatch(setItems(items)),
            1000
        );
        //setTimeout(dispatch(setItems(items)),50000);
        /*axios.get( 'https://react-burger-786.firebaseio.com/ingredients.json' )
            .then( response => {
                dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );*/
    };
};
