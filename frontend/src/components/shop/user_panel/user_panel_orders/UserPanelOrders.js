import React, {Component} from 'react';
import "./../../basket/basket_table/basket_table_products/_basket_table_products.scss"
import "./_user_panel_orders.scss"

class UserPanelOrders extends Component
{

    render() {
        const {priceDisplay, handleChangeCurrentOrder, orders} = this.props
        return (
            <>
                <section className="upo">
                    <table className="upo-table">
                        <thead>
                        <tr>
                            <th className="product-col-s">Lp.</th>
                            <th className="product-col-l">kod zamówienia</th>
                            <th className="product-col-m">data</th>
                            <th className="product-col-s">kwota</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((element, index)=>
                            <tr className="upo-tr" key={"upo-" + index}>
                                <td className="product-col-s upo-id">
                                    {index + 1}.
                                </td>
                                <td className="product-col-l upo-code">
                                    <p onClick={()=>handleChangeCurrentOrder(element, index)}>{element.order_id}.</p>
                                </td>
                                <td className="product-col-m upo-date">
                                    {element.order_date.toString().slice(0, 10)}
                                </td>
                                <td className="product-col-s upo-sum">
                                    {priceDisplay(element.total_sum)}
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </section>

            </>
        )
    }
}

export default UserPanelOrders;