import React, {Component} from 'react';
import "./_basket_table_products.scss"
import "../_basket_table.scss"

class BasketTableProducts extends Component
{
    handleBin = (e) =>
    {
        let target = e.currentTarget;
        this.props.basketDelete(target);
    };

    render() {
        const {basket, basketStep, priceDisplay} = this.props;
        return (
            <>
                <section className="basket-table-products">
                    <table className="basket-table-products-content">
                        <thead>
                            <tr>
                                <th className="product-col-s">Lp.</th>
                                <th className="product-col-m">miniaturka</th>
                                <th className="product-col-l">nazwa produktu</th>
                                <th className="product-col-s">ilość</th>
                                <th className="product-col-m">cena</th>
                                <th className="product-col-m">suma</th>
                                {basketStep === 1 &&
                                <th className="product-col-s">usuń</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {basket.map((element, index)=>
                                <tr key={"basket-" + index}>
                                    <td className="product-col-s basket-product-id">
                                        {index + 1}.
                                    </td>
                                    <td className="product-col-m">
                                        <img src={"./assets/products/" + element.product.id + ".jpeg"}
                                             alt={"product_" + element.product.id}
                                             width="100%"/>
                                    </td>
                                    <td className="product-col-l basket-product-name">
                                        bransoletka <span>{element.product.id}</span>
                                    </td>
                                    <td className="product-col-s basket-product-amount">
                                        {element.amount}
                                    </td>
                                    <td className="product-col-m basket-product-price">
                                        {priceDisplay(element.product.price)}
                                    </td>
                                    <td className="product-col-m basket-product-sum">
                                        {priceDisplay(element.total)}
                                    </td>
                                    {basketStep === 1 &&
                                    <td className="product-col-s basket-product-bin">
                                        <i className="fas fa-trash-alt" onClick={this.handleBin}/>
                                    </td>}
                                </tr>)}
                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}

export default BasketTableProducts;