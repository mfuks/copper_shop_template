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
        lastOrderId: "",
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
            if(order[0].max_id)
            {
                this.setState({
                    lastOrderId: order[0].max_id
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

        const {products, users, lastOrderId} = this.state;
        const {setBasketStep, basketStep, basket, login, deliveryDetails, currentDeliveryType, currentDelivery, totalSum} = this.props;

        let newProductsList = [...products]
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
            let j = 0;
            for (; j < newProductsList.length; j++)
            {
                for (let k = 0; k < changeId.length; k++)
                {
                    if(newProductsList[j].product_id === changeId[k])
                    {
                        let urlProductsUpdate = `http://localhost:5000/products/update?product_id=${newProductsList[j].product_id}&quantity=${newProductsList[j].quantity}`
                        fetch(urlProductsUpdate)
                        .then(resp =>{
                            if (!resp.ok) {
                                throw new Error("something is wrong...");
                            }
                        })
                        .catch(err => console.error(err));
                        break;
                    }
                }
            }

        if(j >= newProductsList.length)
            {
                //order save
                let user_id;
                for (let m = 0; m < users.length; m++) {

                    if(users[m].login.toString().localeCompare(login) === 0)
                    {
                        user_id = users[m].user_id;
                        let address = deliveryDetails;

                        let urlOrderAdd = `http://localhost:5000/orders/add?Users_user_id=${user_id}&`+
                            `delivery_type=${currentDeliveryType}&delivery_cost=${currentDelivery}&total_sum=${totalSum}`;

                        fetch(urlOrderAdd)
                        .then(resp =>{
                            if (!resp.ok) throw new Error("something is wrong...");
                        })
                        .catch(err => console.error(err));

                        for (let n = 0; n < basket.length; n++) {
                            let urlUserProductsAdd = `http://localhost:5000/user_products/add?product_id=${basket[n].product.product_id}&`+
                                `product_quantity=${basket[n].amount}&Orders_order_id=${+lastOrderId+1}&product_price=${+basket[n].product.price}&product_code=${basket[n].product.product_code}`
                            fetch( urlUserProductsAdd )
                            .then(resp =>{
                                if (!resp.ok) throw new Error("something is wrong...");
                            })
                            .catch(err => console.error(err));
                        }

                        let urlAddressAdd = `http://localhost:5000/addresses/add?firstname=${address.name}&lastname=${address.surname}&email=${address.email}&`+
                            `address=${address.address}&city=${address.city}&zipCode=${address.zipCode}&phone=${address.phone}&Users_user_id=${user_id}&Orders_order_id=${+lastOrderId+1}`;
                        fetch(urlAddressAdd)
                        .then(resp =>{
                            if (!resp.ok) throw new Error("something is wrong...");
                        })
                        .catch(err => console.error(err));
                    }
                }

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