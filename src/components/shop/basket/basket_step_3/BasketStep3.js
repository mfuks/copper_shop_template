import React, {Component} from 'react';
import "./_basket_step_3.scss"
import BasketTableProducts from "../basket_table/basket_table_products/BasketTableProducts";
import BasketTableSummary from "../basket_table/basket_table_summary/BasketTableSummary";

class BasketStep3 extends Component
{
    state = {
        products: [],
    };

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

    handleSubmit = (e) =>
    {
        e.preventDefault();

        const {products} = this.state;
        const {setBasketStep, basketStep, basket} = this.props;

        let newProductsList = [...products]
        let putError = false;
        let changeId = [];

        let i = 0;
        for (; i < basket.length;) {

            for (let j = 0; j < products.length; j++) {

                if(products[j].id === basket[i].product.id)
                {
                    changeId.push(products[j].id)
                    newProductsList[j].quantity = (+products[j].quantity - +basket[i].amount).toString();
                }
            }
            i++;
        }

        if(i >= basket.length)
        {
            const url = "http://localhost:3000/products/";

            for (let j = 0; j < newProductsList.length; j++)
            {
                for (let k = 0; k < changeId.length; k++)
                {
                    if(newProductsList[j].id === changeId[k])
                    {
                        fetch(url + newProductsList[j].id,
                            {
                                headers: {"Content-Type": "application/json"},
                                method: 'PUT',
                                dataType: "json",
                                body: JSON.stringify(newProductsList[j]),
                            })
                        .then(resp =>{
                            if (!resp.ok) {
                                putError = true;
                                throw new Error("something is wrong...");
                            }
                        })
                        .catch(err => console.error(err));
                    }
                }
            }
            if(!putError)
            {
                setBasketStep(basketStep + 1);
                this.props.basketSetClear();
            }
        }

    };

    render() {
        const {basket, basketSum, currentDelivery, totalSum, priceDisplay, basketStep, handleGoBack} = this.props;
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
                            <button className="btn" onClick={handleGoBack}>
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