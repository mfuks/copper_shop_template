import React, {Component} from 'react';
import Header from "../general_components/header/Header";
import Products from "./products/Products"
import Footer from "../general_components/footer/Footer";
import Info from "./info/Info";

class Shop extends Component
{
    render() {
        return (
            <>
                <Header login={this.props.login}
                        setClearLogin={this.setClearLogin}
                        path={this.props.path}
                        basket={this.props.basket}
                        basketSum={this.props.basketSum}/>
                <Products basketAdd={this.props.basketAdd}/>
                <Info/>
                <Footer/>
            </>
        )
    }
}

export default Shop;