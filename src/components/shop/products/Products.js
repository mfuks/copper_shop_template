import React, {Component} from 'react';
import "./_products.scss"

class Products extends Component
{
    state = {
        products: [],
        currentPage: 1,
        infoPerPage: 6
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


    handleClick = (e, i) =>
    {
        this.setState({
            currentPage: i
        })
    };


    render() {
        const {products, currentPage, infoPerPage} = this.state;
        const indexOfLast = currentPage * infoPerPage;
        const indexOfFirst = indexOfLast - infoPerPage;
        const currentProducts = products.slice(indexOfFirst, indexOfLast);

        const numberOfPages = Math.ceil(products.length/infoPerPage);
        const pageNumbers = [];

        for (let i = 1; i <= numberOfPages ; i++)
        {
            const pageNumberElement =
                <li key={"product-content-page" + i}
                    onClick={e => this.handleClick(e, i)}
                    className={(currentPage === i) ? "active" : ""}>
                    {i}
                </li>;
            pageNumbers.push(pageNumberElement);
        }

        return (
            <>
                <section className="products">
                    <div className="container">
                        <div className="products-content">
                            <ul className="products-content-products">
                                {currentProducts.map(element =>
                                    <li key={element.id}>
                                        <div className="product">
                                            <figure className="product-img">
                                                <img src={"./assets/products/" + element.id + ".jpeg"}
                                                     alt={"product_" + element.id}/>
                                                <figcaption className="product-name">
                                                    product {element.id}
                                                </figcaption>
                                            </figure>
                                            <section className="product-info">
                                                <div className="product-info-price">
                                                    <i className="fas fa-2x fa-tag label"/>
                                                    <h3>
                                                        {element.price.substr(0, element.price.length-2)},
                                                        {element.price.substr(element.price.length-2, 2)} zł
                                                    </h3>
                                                </div>
                                                <div className="product-info-add">
                                                    <i className="fas fa-2x fa-plus-square product-info-add-btn"
                                                       onClick={()=>this.props.basketAdd(element)}/>
                                                </div>
                                            </section>

                                            <section className="product-details">
                                                <div className="product-details-quantity">
                                                    <h3>
                                                        Dostępność:&nbsp;{element.quantity}
                                                    </h3>
                                                </div>
                                            </section>


                                        </div>
                                    </li>
                                )}
                                {(currentProducts.length % 3 !== 0) &&
                                (currentProducts.length % 3 === 2) ?
                                <li className="invisible-product"/>:
                                <>
                                    <li className="invisible-product"/>
                                    <li className="invisible-product"/>
                                </>}
                            </ul>
                            <ul className="products-content-pages">
                            {numberOfPages !== 1 &&
                                <>
                                    {pageNumbers}
                                </>}
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Products;