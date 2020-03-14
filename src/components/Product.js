import React, { Component } from 'react';

export default class Product extends Component {
  render() {
      // get product
    var { product } = this.props;
    return (
        <div>
            <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight z-depth-1">
                <img src={product.image} className="img-fluid" alt={product.name} />
                <a href="#">
                <div className="mask waves-light waves-effect waves-light" />
                </a>
            </div>
            <div className="card-body">
                <h4 className="card-title">
                <strong>
                <a href="#">{ product.name }</a>
                </strong>
                </h4>
                <ul className="rating">
                { this.showRating(product.rating) }
                
                </ul>
                <p className="card-text">
                {product.description}
                </p>
                <div className="card-footer">
                    <span className="left">{product.price}$</span>
                <span className="right">
                    <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                    <i className="fa fa-shopping-cart" />
                    </a>
                </span>
                </div>
            </div>
            </div>
        </div>    
    )
  }

  showRating = (ratings) => {
      var rs = [];
      if (ratings > 0){
          for(let i = 0; i<ratings; i++){
            rs.push(<li><i className="fa fa-star" /></li>);
          }
          for(let j = 5; j> ratings; j--){
            rs.push(<li><i className="fa fa-star-o" /></li>);
          }
      }
      return rs;
  }
}
