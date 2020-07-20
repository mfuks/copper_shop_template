import React, {Component} from 'react';
import Header from "../general_components/header/Header";
import Products from "./products/Products"
import Footer from "../general_components/footer/Footer";
import Info from "./info/Info";
import ProductInfo from "./product_info/ProductInfo";

class Shop extends Component
{
    state =
    {
        currentProduct: "",
        products: []
    }

    componentDidMount() {

        const url = "http://localhost:3000/products";

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(products =>
        {
            this.setState({
                products: products
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    handleCurrentProductSet = (currentProduct) =>
    {
        let currentProductClick;
        const {products} = this.state
        for (let i = 0; i < products.length; i++) {

            if(+products[i].id === +currentProduct)
            {
                currentProductClick = products[i]
                break;
            }
        }

        this.setState({
            currentProduct: currentProductClick
        })
    }

    handleCurrentProductClear = () =>
    {
        this.setState({
            currentProduct: ""
        })
    }

    render() {
        const {currentProduct} = this.state;
        const {login, setClearLogin, path, basketSum, handleAddBasketElement, basketAmount, basket, setUserPanelStep} = this.props;
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        path={path}
                        basketSum={basketSum}
                        basketAmount={basketAmount}
                        setUserPanelStep={setUserPanelStep}/>

                {currentProduct ?
                    <ProductInfo handleCurrentProductClear={this.handleCurrentProductClear}
                                 currentProduct={currentProduct}
                                 handleAddBasketElement={handleAddBasketElement}/>:
                    <>
                        <Products handleAddBasketElement={handleAddBasketElement}
                                  basket={basket}
                                  handleCurrentProductSet={this.handleCurrentProductSet}/>
                        <Info/>
                    </>}

                <Footer/>
            </>
        )
    }
}

export default Shop;