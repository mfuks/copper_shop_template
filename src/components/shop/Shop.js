import React, {Component} from 'react';
import Header from "./header/Header";
import Product from "./product/Product"

class Shop extends Component
{
    render() {
        return (
            <>
                <Header/>
                <Product/>
            </>
        )
    }
}

export default Shop;