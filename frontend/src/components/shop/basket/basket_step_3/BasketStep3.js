import React, {Component} from 'react';
import "./_basket_step_3.scss"
import BasketTableProducts from "../basket_table/basket_table_products/BasketTableProducts";
import BasketTableSummary from "../basket_table/basket_table_summary/BasketTableSummary";
import {Link} from "react-router-dom";

class BasketStep3 extends Component
{
    state = {
        products: [],
        users: [],
        last0rderId: "",
    };

    componentDidMount() {

        const urlProducts = "/products";

        fetch(urlProducts)
        .then(response => {
            return response.json()
        })
        .then(products =>
        {
            this.setState({
                products: [...products]
            });
        })
        .catch(function(error) {
            console.log(error);
        });

        const urlUsers = "/users";

        fetch(urlUsers)
        .then(response => {
            return response.json()
        })
        .then(users =>
        {
            this.setState({
                users: [...users]
            });
        })
        .catch(function(error) {
            console.log(error);
        });

        const urlOrders = "/orders/max_id";

        fetch(urlOrders)
        .then(response => {
            return response.json()
        })
        .then(order =>
        {
            if(order)
            {
                this.setState({
                    lastOrderId: order
                });
            }
            else
            {
                this.setState({
                    lastOrderId: "0"
                });
            }

        })
        .catch(function(error) {
            console.log(error);
        });
    };

    handleSubmit = (e) =>
    {
        e.preventDefault();

//products update

        const {products, users, last0rderId} = this.state;
        const {setBasketStep, basketStep, basket, login, deliveryDetails, currentDeliveryType, currentDelivery, totalSum} = this.props;

        let newProductsList = [...products]
        let putError = false;
        let changeId = [];

        let i = 0;
        for (; i < basket.length;) {

            for (let j = 0; j < products.length; j++) {

                if(products[j].product_id === basket[i].product.product_id)
                {
                    changeId.push(products[j].product_id)
                    newProductsList[j].quantity = (+products[j].quantity - +basket[i].amount).toString();
                }
            }
            i++;
        }

        if(i >= basket.length)
        {
            let url

            for (let j = 0; j < newProductsList.length; j++)
            {
                for (let k = 0; k < changeId.length; k++)
                {

                    if(newProductsList[j].product_id === changeId[k])
                    {
                        url = `http://localhost:5000/products/update?product_id=${newProductsList[j].product_id}&quantity=${newProductsList[j].quantity}`
                        fetch(url)
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


        //order save
                let user_id;

                for (let j = 0; j < users.length; j++) {
                    if(users[i].login.toString().localeCompare(login))
                    {
                        user_id = users[i].user_id;
                        break;
                    }
                }

                let address = deliveryDetails;

                const url1 = `http://localhost:5000/orders/add?Users_user_id=${user_id}&`+
                    `delivery_type=${currentDeliveryType}&delivery_cost=${currentDelivery}`;

                fetch(url1)
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


                for (let j = 0; j < basket.length; j++) {
                    const url2 = `http://localhost:5000/user_products/add?product_id=${basket[j].product.product_id}&`+
                        `product_quantity=${basket[j].amount}&Orders_order_id=${last0rderId+1}`;
                    fetch(url2)
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

                const url3 = `http://localhost:5000/addresses/add?firstname=${address.name}&lastname=${address.surname}&email=${address.email}&`+
                    `address=${address.address}&city=${address.city}&zipCode=${address.zipCode}&phone=${address.phone}&Users_user_id=${user_id}&Orders_order_id=${last0rderId+1}`;
                fetch(url3)
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


                setBasketStep(basketStep + 1);
                this.props.basketSetClear();

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