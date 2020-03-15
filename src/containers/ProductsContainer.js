import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';

export class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
       <Products>
           {this.showProducts(products)}
       </Products>
    )
  }

  // show products
  showProducts = (products) => {
    var rs = null;
    if (products.length > 0){
      rs = products.map((product,index)=>{
        return (
            <div className="col-lg-4 col-md-6 mb-r">
              <Product key={index} product={product}></Product>
            </div>
          )
      })
    }
    return rs;
  }
}
const mapStateToProps = (state) => ({
  products: state.products
})
export default connect(mapStateToProps, null)(ProductsContainer)