import React, {Component} from 'react';
import "./_basket_step_1.scss"
import $ from 'jquery';
import BasketTableProducts from "../basket_table/basket_table_products/BasketTableProducts";
import BasketTableSummary from "../basket_table/basket_table_summary/BasketTableSummary";

class BasketStep1 extends Component
{
    state =
        {
            disabled: true
        };

    componentDidMount()
    {
        const {currentDelivery} = this.props;
        $(function () {
            const $element = document.querySelector(".basket-step-1-delivery");

            if($element && currentDelivery) {
                const $list = $element.querySelectorAll("label");
                for (let i = 0; i < $list.length ; i++) {
                    $list[i].querySelector("input").removeAttribute("checked");
                }
                for (let i = 0; i < $list.length; i++) {
                    if ($list[i].querySelector("input").getAttribute("value") === currentDelivery)
                    {
                        $list[i].querySelector("input").setAttribute("checked", "true");
                    }
                }
            }
        });
        if(currentDelivery)
        {
            this.setState({
                disabled: false
            });
        }
    }

    handleChange = (e) =>
    {
        this.setState({
            disabled: false
        });
        this.props.handleDeliveryChange(e.currentTarget.value, e.currentTarget.getAttribute("id"))
    };

    render() {
        const {basket, basketSum, currentDelivery, totalSum, delivery, basketStep, priceDisplay, basketDelete,
            basketOnAmountChange, setBasketStep} = this.props;
        const {disabled} = this.state;
        return (
            <>
                <section className="basket-step-1">
                    <div className="container basket-container">
                        {basket.length !== 0 ?
                            <>
                                <BasketTableProducts
                                basketStep={basketStep}
                                basket={basket}
                                priceDisplay={priceDisplay}
                                basketDelete={basketDelete}
                                basketOnAmountChange={basketOnAmountChange}/>
                                <div className="basket-step-content">
                                    <section className="basket-step-1-delivery">
                                        <p>
                                            Opcje dostawy:
                                        </p>
                                        <label>
                                            <input id="list polecony"
                                                   type="radio"
                                                   name="delivery"
                                                   value={delivery.letter}
                                                   onChange={this.handleChange}/>
                                            <span className="custom-radio"/>
                                            List polecony: &nbsp; {priceDisplay(delivery.letter)}
                                        </label>
                                        <label>
                                            <input type="radio"
                                                   id="paczkomat"
                                                   name="delivery"
                                                   value={delivery.inPost}
                                                   onChange={this.handleChange}/>
                                            <span className="custom-radio"/>
                                            Paczkomat: &nbsp; {priceDisplay(delivery.inPost)}
                                        </label>
                                        <label>
                                            <input id="kurier"
                                                   type="radio"
                                                   name="delivery"
                                                   value={delivery.courier}
                                                   onChange={this.handleChange}/>
                                            <span className="custom-radio"/>
                                            Kurier: &nbsp; {priceDisplay(delivery.courier)}
                                        </label>

                                    </section>
                                    <BasketTableSummary
                                        basketSum={basketSum}
                                        currentDelivery={currentDelivery}
                                        totalSum={totalSum}
                                        priceDisplay={priceDisplay}/>
                                </div>
                                <section className="basket-step-btn">
                                    {!currentDelivery && <p>Aby przejść dalej wybierz opcje dostawy</p>}

                                    <button className="btn" onClick={() => setBasketStep(basketStep + 1)} disabled={disabled}>
                                        Dalej
                                    </button>

                                </section>
                            </>:
                            <section className="basket-info">
                                <div className="basket-info-content">
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