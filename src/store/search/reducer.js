import _ from 'lodash';
import * as type from './actionTypes';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    description : '',
		stock : 0,
		size : '',
		color : '',
		price : 0.0,
		sku : '',
		image : '',
		promotions : [],
    nextSearch: ''
  });

  export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case type.PRODUCT_SEARCHING:
            console.log(type.PRODUCT_SEARCHING);
            return state.merge({nextSearch: action.nextSearch});            
        case type.PRODUCT_FOUND:
            console.log(type.PRODUCT_FOUND);          
            return state.merge({ 
                description: action.description, 
                stock: action.stock,
                size: action.size,
                color: action.color,
                price: action.price,
                sku: action.sku,
                image: action.image,
                promotions: action.promotions});
        case type.PRODUCT_NOT_FOUND:
            console.log(type.PRODUCT_NOT_FOUND);
            return state;
        case type.PRODUCT_CLEAR_SEARCH:
            console.log(type.PRODUCT_CLEAR_SEARCH);
            return state.merge({nextSearch: ''});    
        default:
            return state;
    }
  }

  export function cleanNextSearch(state){
    return _.isEmpty(state.search.nextSearch);
  }

  export function getNextSearch(state){
    return state.search.nextSearch;
  }

  export function getProductName(state){
    return state.search.description;
  }

  export function getStock(state){
    return state.search.stock;
  }

  export function getSize(state){
    return state.search.size;
  }

  export function getSku(state){
    return state.search.sku;
  }

  export function getImage(state){
    return state.search.image;
  }
  
  export function getColor(state){
    return state.search.color;
  }

  export function getPromotions(state){
    return state.search.promotions;
  }
  
  export function getPrice(state){
    return state.search.price;
  }
