import React, {Component} from 'react';
import "./_basket_table_summary.scss"
import "../_basket_table.scss"

class BasketTableSummary extends Component
{
    render() {
        const {basketSum, currentDelivery, totalSum, priceDisplay} = this.props;
        return (
            <>
                <section className="basket-table-summary">
                    <table className="basket-table-summary-content">
                        <tbody>
                        <tr>
                            <th className="basket-table-summary-header">Wartość produktów:</th>
                            <td className="basket-table-summary-result">
                                {basketSum && priceDisplay(basketSum)}
                            </td>
                        </tr>
                        <tr>
                            <th className="basket-table-summary-header">Koszty dostawy:</th>
                            <td className="basket-table-summary-result">
                                {currentDelivery ?
                                    priceDisplay(currentDelivery) : "    -   zł"}
                            </td>
                        </tr>
                        <tr>
                            <th className="basket-table-summary-header total">Łącznie:</th>
                            <td className="basket-table-summary-result total">
                                {basketSum && currentDelivery ?
                                    priceDisplay(totalSum) : priceDisplay(basketSum)}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>

            </>
        )
    }
}

export default BasketTableSummary;