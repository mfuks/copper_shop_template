import React, {Component} from 'react';
import "./_basket_step_1.scss"

class BasketStep1 extends Component
{
    state =
        {
            delivery: {
                letter: "800",
                inPost: "1000",
                courier: "2000",
            },
            currentDelivery: "",
            totalSum: ""
        };

    handleDeliveryChange = (e) =>
    {
        let total = (+this.props.basketSum + +e.currentTarget.value).toString();

        this.setState({
            currentDelivery: e.currentTarget.value,
            totalSum: total
        });
    };

    priceDisplay = (price) =>
    {
        return price.substr(0, price.length-2) + "," +
            price.substr(price.length-2, 2)  + "zł"
    };

    render() {
        const {basket, basketSum} = this.props;
        const {delivery, currentDelivery, totalSum} = this.state;
        return (
            <>
                <section className="basket-step-1">
                    <div className="container basket-container">
                        {basket.length !== 0 ?
                            <>
                                <table className="basket-step-1-products">
                                    <thead>
                                        <tr>
                                            <th className="product-col-s">Lp.</th>
                                            <th className="product-col-m">miniaturka</th>
                                            <th className="product-col-l">nazwa produktu</th>
                                            <th className="product-col-s">ilość</th>
                                            <th className="product-col-m">cena</th>
                                            <th className="product-col-m">suma</th>
                                            <th className="product-col-s">usuń</th>
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
                                                <td className="product-col-s basket-product-bin">
                                                    <i className="fas fa-trash-alt"/>
                                                </td>
                                            </tr>)}
                                    </tbody>
                                </table>

                                <div>
                                    <section className="basket-step-1-delivery">
                                        <p>
                                            Opcje dostawy:
                                        </p>
                                        <label>
                                            <input type="radio"
                                                   name="delivery"
                                                   value={delivery.letter}
                                                   onChange={this.handleDeliveryChange}/>
                                            <span className="custom-radio"/>
                                            List polecony: &nbsp; {this.priceDisplay(delivery.letter)}
                                        </label>
                                        <label>
                                            <input type="radio"
                                                   name="delivery"
                                                   value={delivery.inPost}
                                                   onChange={this.handleDeliveryChange}/>
                                            <span className="custom-radio"/>
                                            Paczkomat: &nbsp; {this.priceDisplay(delivery.inPost)}
                                        </label>
                                        <label>
                                            <input type="radio"
                                                   name="delivery"
                                                   value={delivery.courier}
                                                   onChange={this.handleDeliveryChange}/>
                                            <span className="custom-radio"/>
                                            Kurier: &nbsp; {this.priceDisplay(delivery.courier)}
                                        </label>
                                    </section>

                                    <table className="basket-step-1-summary">
                                        <tbody>
                                            <tr>
                                                <th className="basket-step-1-summary-header">Wartość produktów:</th>
                                                <td className="basket-step-1-summary-content">
                                                    {basketSum && this.priceDisplay(basketSum)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="basket-step-1-summary-header">Koszty dostawy:</th>
                                                <td className="basket-step-1-summary-content">
                                                    {currentDelivery ?
                                                        this.priceDisplay(currentDelivery) : "    -   zł"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="basket-step-1-summary-header total">Łącznie:</th>
                                                <td className="basket-step-1-summary-content total">
                                                    {basketSum && currentDelivery ?
                                                        this.priceDisplay(totalSum) : this.priceDisplay(basketSum)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>:
                            <section className="basket-step-1-empty">
                                <div className="basket-step-1-empty-content">
                                    <h3>Twój koszyk jest pusty</h3>
                                </div>
                            </section>}
                    </div>
                </section>
            </>
        )
    }
}

export default BasketStep1;