import React, { Component } from "react";
import { ClothProducts, DetailProducts } from "./data";

const ProductContext = React.createContext();

class Productprovider extends Component {
  state = {
    myproducts: [],
    Detail: DetailProducts,
    cart: [],
    modelOpen: false,
    modelProduct: DetailProducts,
    closeModal: true,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    ClothProducts.forEach(cloth => {
      const oneCloth = { ...cloth };
      tempProducts = [...tempProducts, oneCloth];
    });
    this.setState(() => {
      return { myproducts: tempProducts };
    });
  };
  getItem = id => {
    const product = this.state.myproducts.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const myCloth = this.getItem(id);
    this.setState(() => {
      return { Detail: myCloth };
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.myproducts];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          myproducts: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = id => {
    const producto = this.getItem(id);
    this.setState(() => {
      return { modelProduct: producto, modelOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };

  increament = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decreament = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.myproducts];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.05;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handle: this.handleDetail,
          add: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increament: this.increament,
          decreament: this.decreament,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, Productprovider };
