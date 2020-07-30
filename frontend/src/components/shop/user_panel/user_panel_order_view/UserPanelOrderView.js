import React, {Component} from 'react';
import "./../../basket/basket_table/basket_table_products/_basket_table_products.scss"
import "../../basket/_basket.scss";
import "./_user_panel_order_view.scss"


import BasketTableSummary from "../../basket/basket_table/basket_table_summary/BasketTableSummary";

class UserPanelOrderView extends Component
{
    state = {
        order: [],
        orderDetails: "", //!
        orderUserId: ""
    }

    componentDidMount() {

        const {orders} = this.props
        let userOrders = [];

        for (let i = 0; i < orders.length;i++)
        {
            if(orders[i].login === this.props.login)
            {
                userOrders.push(orders[i]);
            }
        }

        for (let i = 0; i < userOrders.length; i++)
        {
            if(+userOrders[i].id === +this.props.currentOrderView)
            {
                this.setState({
                    order: [...userOrders[i].basket],
                    orderDetails: userOrders[i],
                    orderUserId: i
                });
                break;
            }
        }
    };

    componentWillUnmount()
    {
        this.props.handleChangeCurrentOrderView("")
    }

    handleGoBack = () =>
    {
        this.props.handleChangeCurrentOrderView("")
    }

    render() {
        const {order, orderDetails, orderUserId} = this.state
        const {priceDisplay, currentOrderView} = this.props
        return (
            <>
                <section className="upov">
                    <section className="upov-info">
                        <p>zamówienie:&nbsp;{orderUserId + 1}</p>
                        <p>kod zamówienia:&nbsp;{currentOrderView}</p>
                        <p>data:&nbsp;{orderDetails.date}</p>
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
                        {order ? order.map((element,index)=>
                            <tr key={"basket-" + index}>
                                <td className="product-col-s">
                                    {index + 1}.
                                </td>
                                <td className="product-col-l">
                                    bransoletka&nbsp;{element.product.id}
                                </td>
                                <td className="product-col-m">
                                    {element.product.code}
                                </td>
                                <td className="product-col-s">
                                    {element.amount}
                                </td>
                                <td className="product-col-m">
                                    {priceDisplay(element.product.price)}
                                </td>
                                <td className="product-col-m">
                                    {priceDisplay(element.total)}
                                </td>
                            </tr>):
                            <tr/>}
                        </tbody>
                    </table>
                    {orderDetails &&
                    <div className="upov-content">
                        <section className="upov-content-section">
                            <section className="basket-step-3-details">
                                <section className="basket-step-3-details-content">
                                    <h4>
                                        Adres dostawy:
                                    </h4>
                                    <p>{orderDetails.address.name}&nbsp;{orderDetails.address.surname}</p>
                                    <p>{orderDetails.address.address}</p>
                                    <p>{orderDetails.address.zipCode}&nbsp;{orderDetails.address.city}</p>
                                </section>
                                <section className="basket-step-3-details-content">
                                    <h4>
                                        Dane kontaktowe:
                                    </h4>
                                    <p>email:&nbsp;{orderDetails.address.email}</p>
                                    <p>telefon:&nbsp;{orderDetails.address.phone}</p>
                                </section>
                            </section>
                            <section className="basket-step-3-details-content-delivery">
                                <h4>
                                    Sposób dostawy:&nbsp;<span>{orderDetails.delivery}</span>
                                </h4>
                            </section>
                        </section>
                        <BasketTableSummary
                            basketSum={(+orderDetails.totalSum - +orderDetails.deliveryCost).toString()}
                            currentDelivery={orderDetails.deliveryCost}
                            totalSum={orderDetails.totalSum}
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