import React, {Component} from 'react';
import "./_basket_step_1.scss"

class BasketStep1 extends Component
{

    render() {
        const {basket, basketSum} = this.props;
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
                                                <td className="product-col-s">{index + 1}.</td>
                                                <td className="product-col-m">
                                                    <img src={"./assets/products/" + element.id + ".jpeg"}
                                                         alt={"product_" + element.id}
                                                         width="100%"/>
                                                </td>
                                                <td className="product-col-l">bransoletka {element.id}</td>
                                                <td className="product-col-s">3 {/*tu zmienna*/}</td>
                                                <td className="product-col-m">
                                                    {basketSum && basketSum.substr(0, basketSum.length-2)},
                                                    {basketSum && basketSum.substr(basketSum.length-2, 2)} zł
                                                </td>
                                                <td className="product-col-m">
                                                    {basketSum && basketSum.substr(0, basketSum.length-2)},
                                                    {basketSum && basketSum.substr(basketSum.length-2, 2)} zł
                                                    {/*tu zmienna*/}
                                                </td>
                                                <td className="product-col-s">
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
                                                   value="letter"/>
                                            <span className="custom-radio"/>
                                            List polecony: 8zł
                                        </label>
                                        <label>
                                            <input type="radio"
                                                   name="delivery"
                                                   value="inpost"/>
                                            <span className="custom-radio"/>
                                            Paczkomat: 10zł
                                        </label>
                                        <label>
                                            <input type="radio"
                                                   name="delivery"
                                                   value="kurier"/>
                                            <span className="custom-radio"/>
                                            Kurier: 20zł
                                        </label>
                                    </section>

                                    <table className="basket-step-1-summary">
                                        <tbody>
                                            <tr>
                                                <th className="basket-step-1-summary-header">Wartość produktów:</th>
                                                <td className="basket-step-1-summary-content">
                                                    {basketSum && basketSum.substr(0, basketSum.length-2)},
                                                    {basketSum && basketSum.substr(basketSum.length-2, 2)} zł
                                                    {/*tu zmienna*/}</td>
                                            </tr>
                                            <tr>
                                                <th className="basket-step-1-summary-header">Koszty dostawy:</th>
                                                <td className="basket-step-1-summary-content">
                                                    20,00 zł
                                                    {/*tu zmienna*/}</td>
                                            </tr>
                                            <tr>
                                                <th className="basket-step-1-summary-header total">Łącznie:</th>
                                                <td className="basket-step-1-summary-content total">
                                                    {basketSum && basketSum.substr(0, basketSum.length-2)},
                                                    {basketSum && basketSum.substr(basketSum.length-2, 2)} zł
                                                    {/*tu zmienna*/}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>:
                            <section className="basket-step-1-empty">
                                <div className="basket-step-1-empty-content">
                                    <h3>Twój koszyk jest pusty</h3>
                                </div>
                            </section>
                            }
                    </div>
                </section>
            </>
        )
    }
}

export default BasketStep1;