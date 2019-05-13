import React, { Component, createContext } from "react";
import {data} from "../data.json";

export const MyContext = createContext();

export default class MyProvider extends Component {
  state = {
    products: data
  };

  handleSearch = e => {
    const filteredProducts = data.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      products: filteredProducts
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          products: this.state.products,
          handleSearch: this.handleSearch
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
