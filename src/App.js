import React, { Component } from 'react';
import Header from './components/layouts/front/partials/Header';
import Footer from './components/layouts/front/partials/Footer';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';


export default class App extends Component {
  render() {
    return (
        <div>
        {/* Header */}
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer></ProductsContainer>
            {/* Message */}
            <Message></Message>
            {/* Cart */}
            <Cart></Cart>
          </div>
        </main>
        {/* Footer */}
        <Footer></Footer>
      </div>
    )
  }
}
