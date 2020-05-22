import React, {Component} from 'react';
import Header from "./header/Header";
import Product from "./product/Product"
import Footer from "../general_components/footer/Footer";
import Info from "./info/Info";

class Shop extends Component
{
    render() {
        return (
            <>
                <Header/>
                <Product/>
                <Info/>
                <Footer/>
            </>
        )
    }
}

export default Shop;