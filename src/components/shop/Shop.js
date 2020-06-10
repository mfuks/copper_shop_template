import React, {Component} from 'react';
import Header from "../general_components/header/Header";
import Product from "./product/Product"
import Footer from "../general_components/footer/Footer";
import Info from "./info/Info";

class Shop extends Component
{
    render() {
        return (
            <>
                <Header login={this.props.login}
                        setClearLogin={this.setClearLogin}/>
                <Product/>
                <Info/>
                <Footer/>
            </>
        )
    }
}

export default Shop;