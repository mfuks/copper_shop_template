import React, {Component} from 'react';
import Header from "../general_components/header/Header";
import Products from "./products/Products"
import Footer from "../general_components/footer/Footer";
import Info from "./info/Info";

class Shop extends Component
{

    render() {
        const {login, setClearLogin, path, basket, basketSum, basketAdd} = this.props;
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        path={path}
                        basket={basket}
                        basketSum={basketSum}/>
                <Products basketAdd={basketAdd}/>
                <Info/>
                <Footer/>
            </>
        )
    }
}

export default Shop;