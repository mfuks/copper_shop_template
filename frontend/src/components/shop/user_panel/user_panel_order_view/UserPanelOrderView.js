import React, {Component} from 'react';
import "./../../basket/basket_table/basket_table_products/_basket_table_products.scss"
import "../../basket/_basket.scss";
import "./_user_panel_order_view.scss"


import BasketTableSummary from "../../basket/basket_table/basket_table_summary/BasketTableSummary";

class UserPanelOrderView extends Component
{
    state = {
        products: [],
        address: []
    }

    componentDidMount() {
        const urlUserProducts = "/user_products";

        fetch(urlUserProducts)
        .then(response => {
            return response.json()
        })
        .then(products =>
        {
            let userOrder = [];
            let i = 0;
            for (; i < products.length; i++)
            {
                if(+products[i].Orders_order_id === +this.props.currentOrder.order_id)
                {
                    userOrder.push(products[i]);
                }
            }
            if(i >= products.length)
            {
                this.setState({
                    products: userOrder
                });
            }
        })
        .catch(function(error) {
            console.log(error);
        });

        const urlAddresses = "/addresses";

        fetch(urlAddresses)
        .then(response => {
            return response.json()
        })
        .then(addresses =>
        {
            let i = 0;
            for (; i < addresses.length; i++)
            {
                if(+addresses[i].Orders_order_id === +this.props.currentOrder.order_id)
                {
                    this.setState({
                        address: addresses[i]
                    });
                    break;
                }
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    componentWillUnmount()
    {
        this.props.handleChangeCurrentOrder("")
    }

    handleGoBack = () =>
    {
        this.props.handleChangeCurrentOrder("")
    }

    render() {
        const {products, address} = this.state
        const {priceDisplay, currentOrder, orderUserId} = this.props
        return (
            <>
                <section className="upov">
                    <section className="upov-info">
                        {currentOrder &&
                            <>
                                <p>zamówienie:&nbsp;{orderUserId + 1}</p>
                                <p>kod zamówienia:&nbsp;{currentOrder.order_id}</p>
                                <p>data:&nbsp;{currentOrder.order_date.toString().slice(0, 10)}</p>
                            </>}
                    </section>
                    <table className="upov-table">
                        <thead>
                            <tr>
                                <th className="product-col-s">Lp.</th>
                                <th className="product-col-l">nazwa produktu</th>
                                <th className="product-col-m">kod</th>
                                <th className="product-col-s">ilość</th>
                                <th className="product-col-m">cena</th>
                                <th className="product-col-m">suma</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products ? products.map((element,index)=>
                            <tr key={"basket-" + index}>
                                <td className="product-col-s">
                                    {index + 1}.
                                </td>
                                <td className="product-col-l">
                                    bransoletka&nbsp;{element.product_id}
                                </td>
                                <td className="product-col-m">
                                    {element.product_code}
                                </td>
                                <td className="product-col-s">
                                    {element.product_quantity}
                                </td>
                                <td className="product-col-m">
                                    {priceDisplay(element.product_price)}
                                </td>
                                <td className="product-col-m">
                                    {priceDisplay(+element.product_quantity * +element.product_price)}
                                </td>
                            </tr>):
                            <tr/>}
                        </tbody>
                    </table>
                    {(address && currentOrder) &&
                    <div className="upov-content">
                        <section className="upov-content-section">
                            <section className="basket-step-3-details">
                                <section className="basket-step-3-details-content">
                                    <h4>
                                        Adres dostawy:
                                    </h4>
                                    <p>{address.firstanem}&nbsp;{address.lastname}</p>
                                    <p>{address.address}</p>
                                    <p>{address.zipCode}&nbsp;{address.city}</p>
                                </section>
                                <section className="basket-step-3-details-content">
                                    <h4>
                                        Dane kontaktowe:
                                    </h4>
                                    <p>email:&nbsp;{address.email}</p>
                                    <p>telefon:&nbsp;{address.phone}</p>
                                </section>
                            </section>
                            <section className="basket-step-3-details-content-delivery">
                                <h4>
                                    Sposób dostawy:&nbsp;<span>{currentOrder.delivery_type}</span>
                                </h4>
                            </section>
                        </section>
                        <BasketTableSummary
                            basketSum={(+currentOrder.total_sum - +currentOrder.delivery_cost).toString()}
                            currentDelivery={currentOrder.delivery_cost}
                            totalSum={currentOrder.total_sum}
                            priceDisplay={priceDisplay}/>
                    </div>}
                    <section className="upov-btns">
                        <button className="btn" onClick={this.handleGoBack}>
                            Wstecz
                        </button>
                    </section>
                </section>
            </>
        )
    }
}

export default UserPanelOrderView;