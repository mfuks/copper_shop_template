import React, {Component} from 'react';
import Header from "../general_components/header/Header";
import Products from "./products/Products"
import Footer from "../general_components/footer/Footer";
import Info from "./info/Info";

class Shop extends Component
{

    render() {
        const {login, setClearLogin, path, basketSum, basketAdd, basketAmount} = this.props;
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        path={path}
                        basketSum={basketSum}
                        basketAmount={basketAmount}/>
                <Products basketAdd={basketAdd}/>
                <Info/>
                <Footer/>
            </>
        )
    }
}

export default Shop;