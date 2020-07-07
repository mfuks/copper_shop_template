import React, {Component} from 'react';
import "./_basket_step_3.scss"

class BasketStep3 extends Component
{
    state =
        {
            users: "",
        };

    componentDidMount()
    {
        const url = "http://localhost:3012/users";

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(users =>
        {
            this.setState({
                users: users
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    priceDisplay = (price) =>
    {
        return price.substr(0, price.length-2) + "," +
            price.substr(price.length-2, 2)  + "zł"
    };

    handleSubmit = (e) =>
    {
        e.preventDefault();

        const {setBasketStep, basketStep} = this.props;
        setBasketStep(basketStep + 1);

    };

    handleGoBack = () =>
    {
        const {setBasketStep, basketStep} = this.props;
        setBasketStep(basketStep - 1)
    };

    render() {

        const {} = this.state;
        const {basket, basketSum, currentDelivery, totalSum} = this.props;
        return (
            <>
                <section className="basket-step-3">
                    <div className="container basket-container">
                        <table className="basket-step-3-products">
                            <thead>
                            <tr>
                                <th className="product-col-s">Lp.</th>
                                <th className="product-col-m">miniaturka</th>
                                <th className="product-col-l">nazwa produktu</th>
                                <th className="product-col-s">ilość</th>
                                <th className="product-col-m">cena</th>
                                <th className="product-col-m">suma</th>
                            </tr>
                            </thead>
                            <tbody>
                            {basket.map((element, index)=>
                                <tr key={"basket-" + index}>
                                    <td className="product-col-s basket-product-id">
                                        {index + 1}.
                                    </td>
                                    <td className="product-col-m">
                                        <img src={"./assets/products/" + element.product.id + ".jpeg"}
                                             alt={"product_" + element.product.id}
                                             width="100%"/>
                                    </td>
                                    <td className="product-col-l basket-product-name">
                                        bransoletka {element.product.id}
                                    </td>
                                    <td className="product-col-s basket-product-amount">
                                        {element.amount}
                                    </td>
                                    <td className="product-col-m basket-product-price">
                                        {this.priceDisplay(element.product.price)}
                                    </td>
                                    <td className="product-col-m basket-product-sum">
                                        {this.priceDisplay(element.total)}
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>

                        <table className="basket-step-3-summary">
                            <tbody>
                            <tr>
                                <th className="basket-step-3-summary-header">Wartość produktów:</th>
                                <td className="basket-step-3-summary-content">
                                    {basketSum && this.priceDisplay(basketSum)}
                                </td>
                            </tr>
                            <tr>
                                <th className="basket-step-3-summary-header">Koszty dostawy:</th>
                                <td className="basket-step-3-summary-content">
                                    {currentDelivery ?
                                        this.priceDisplay(currentDelivery) : "    -   zł"}
                                </td>
                            </tr>
                            <tr>
                                <th className="basket-step-3-summary-header total">Łącznie:</th>
                                <td className="basket-step-3-summary-content total">
                                    {basketSum && currentDelivery ?
                                        this.priceDisplay(totalSum) : this.priceDisplay(basketSum)}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <section className="basket-step-btns">
                            <button className="btn" onClick={this.handleGoBack}>
                                Wstecz
                            </button>
                            <button className="btn confirm-btn" onClick={this.handleSubmit} >
                                Potwierdzam
                            </button>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default BasketStep3;