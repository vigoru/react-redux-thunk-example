import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductModal from '../components/ProductModal';
import * as searchSelector from '../store/search/reducer';
import * as searchActions from '../store/search/actions.js';

class SearchForm extends Component {
    constructor(props) {
        super(props);    
        console.log(this.props);
    }

    componentDidMount() {
        if (!this.props.isNextSearchClean) this.props.dispatch(searchActions.cleanNextSearch());
    }

    render(){ 
        return (
            <div className="SearchForm">
                <div className="search">
                    <input id="add" type="text" onChange={this.handleChange.bind(this)} />        
                    <button className="button" type="submit" value="Buscar" onClick= {this.handleSubmit.bind(this)}>Buscar</button>
                    <button className="button" type="submit" value="Buscar" onClick= {this.handleClean.bind(this)}>Limpar</button>
                </div>
                <div className="ProductModal">
                    <ProductModal 
                        name={this.props.productName}
                        stock={this.props.productStock}
                        size={this.props.productSize}
                        sku={this.props.productSku}
                        color={this.props.productColor}
                        price={this.props.productPrice}
                        promotions={this.props.productPromotions}
                        image={this.props.productImage}                            
                        />
                </div>
            </div>
        );
    }

    handleChange(event) {    
        this.props.dispatch(searchActions.valueToSearch(event.target.value));
    }

    handleSubmit() {
        this.props.dispatch(searchActions.search());
    }

    handleClean() {
        document.getElementById('add').value = '';
    }
}

function mapStateToProps(state) {
    return {
        productName: searchSelector.getProductName(state),
        productStock: searchSelector.getStock(state),
        productPrice: searchSelector.getPrice(state),
        productSize: searchSelector.getSize(state),
        productImage: searchSelector.getImage(state),
        productSku: searchSelector.getSku(state),
        productColor: searchSelector.getColor(state),
        productPromotions: searchSelector.getPromotions(state),
        isNextSearchClean: searchSelector.cleanNextSearch(state)
    };
}
      
export default connect(mapStateToProps)(SearchForm);


