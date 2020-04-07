import _ from 'lodash';
import * as type from './actionTypes';
import * as searchActions from './reducer'; 

let products = require('../../products/products.json');
console.log(products[0].userName);


export function cleanNextSearch(){
    return (dispatch) => {
        dispatch({type: type.PRODUCT_CLEAR_SEARCH});
    }
}

export function valueToSearch(productToSearch){
    return (dispatch) => {
        dispatch({type: type.PRODUCT_SEARCHING, nextSearch: productToSearch });
    }
}

export function search(){
    return (dispatch, getState) => {
        const sku = searchActions.getNextSearch(getState());        
        const product = products.find((prod) => prod.sku === sku);
        if (!_.isUndefined(product)){
            dispatch({type: type.PRODUCT_FOUND, 
                description: product.description,
                stock: product.stock,
                size: product.size,
                color: product.color,
                price: product.price,
                sku: product.sku,
                promotions: product.promotions,
                image: product.image });
        }else{
            dispatch({type: type.PRODUCT_NOT_FOUND});
        }
    };
}