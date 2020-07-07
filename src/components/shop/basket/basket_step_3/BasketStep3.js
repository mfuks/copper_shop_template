import React, {Component} from 'react';
import "./_basket_step_3.scss"
import BasketTableProducts from "../basket_table/basket_table_products/BasketTableProducts";
import BasketTableSummary from "../basket_table/basket_table_summary/BasketTableSummary";

class BasketStep3 extends Component
{
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
        const {basket, basketSum, currentDelivery, totalSum, priceDisplay, basketStep} = this.props;
        return (
            <>
                <section className="basket-step-3">
                    <div className="container basket-container">
                        <BasketTableProducts
                            basketStep={basketStep}
                            basket={basket}
                            priceDisplay={priceDisplay}/>
                        <BasketTableSummary
                            basketSum={basketSum}
                            currentDelivery={currentDelivery}
                            totalSum={totalSum}
                            priceDisplay={priceDisplay}/>
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