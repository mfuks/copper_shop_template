import React, {Component} from 'react';
import "./_basket_step_3.scss"
import BasketTableProducts from "../basket_table/basket_table_products/BasketTableProducts";
import BasketTableSummary from "../basket_table/basket_table_summary/BasketTableSummary";
import {Link} from "react-router-dom";

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

//products update

        const {products} = this.state;
        const {setBasketStep, basketStep, basket, login, deliveryDetails, currentDeliveryType} = this.props;

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

        //order save

                const url = "http://localhost:3014/orders";

                let today = new Date();
                let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                let address = deliveryDetails;
                let delivery = currentDeliveryType

                fetch(url,
                    {
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        dataType: "json",
                        body: JSON.stringify({login, date, basket, address, delivery}),
                    })
                .then(resp =>{
                    if (!resp.ok) {
                        throw new Error("something is wrong...");
                    }
                    else
                    {
                        console.log(resp);
                    }
                })
                .catch(err => console.error(err));

            }
        }






    };

    render() {
        const {basket, basketSum, currentDelivery, totalSum, priceDisplay, basketStep, handleGoBack, deliveryDetails,
            currentDeliveryType,login} = this.props;
        return (
            <>
                <section className="basket-step-3">
                    <div className="container basket-container">
                        <BasketTableProducts
                            basketStep={basketStep}
                            basket={basket}
                            priceDisplay={priceDisplay}/>
                        <div className="basket-step-content">
                            <section className="basket-step-3-details">
                                <section className="basket-step-3-details-content">
                                    <h4>
                                        Adres dostawy:
                                    </h4>
                                    <p>{deliveryDetails.name}&nbsp;{deliveryDetails.surname}</p>
                                    <p>{deliveryDetails.address}</p>
                                    <p>{deliveryDetails.zipCode}&nbsp;{deliveryDetails.city}</p>
                                    <section className="basket-step-3-details-content-delivery">
                                        <h4>
                                            Sposób dostawy:&nbsp;
                                        </h4>
                                        <span>{currentDeliveryType}</span>
                                    </section>
                                </section>
                                <section className="basket-step-3-details-content">
                                    <h4>
                                        Dane kontaktowe:
                                    </h4>
                                    <p>email:&nbsp;{deliveryDetails.email}</p>
                                    <p>telefon:&nbsp;{deliveryDetails.phone}</p>
                                </section>

                            </section>
                            <BasketTableSummary
                                basketSum={basketSum}
                                currentDelivery={currentDelivery}
                                totalSum={totalSum}
                                priceDisplay={priceDisplay}/>
                        </div>

                        <section className="basket-step-btns">
                            <button className="btn" onClick={handleGoBack}>
                                Wstecz
                            </button>

                            {login ?
                                <button className="btn confirm-btn" onClick={this.handleSubmit} >
                                    Potwierdzam
                                </button>:
                                <Link className="btn confirm-btn" to="/login">Potwierdzam</Link>
                            }
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default BasketStep3;