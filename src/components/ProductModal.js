import React, { Component } from 'react';

export default class ProductModal extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
      return (<div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.stock}</h3>
        <h3>{this.props.size}</h3>
        <h3>{this.props.sku}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.price}</h3>
        <h3>{this.props.promotions}</h3>
        <img src={this.props.image} />
      </div>
      );
    }
}