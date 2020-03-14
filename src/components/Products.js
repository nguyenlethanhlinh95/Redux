import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

export class Products extends Component {
  render() {
    var { products } = this.props;
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
            {/* Product */}
            { this.showProducts(products)}
            </div>
        </section>     
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

export default connect(mapStateToProps, null)(Products)




