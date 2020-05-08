import React, {Component} from 'react';
import "./_product.scss"

class Products extends Component
{
    state = {
        products: []
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


    render() {
        const {products} = this.state;
        return (
            <>
                <section className="products">
                    <div className="container">
                        <div className="products-content">
                            <ul>
                                {products.map( element =>
                                    <li key={element.id}>
                                        <div className="product">
                                            <figure className="product-img">
                                                <img src={"./assets/products/" + element.id + ".jpeg"} alt={"product_" + element.id}/>
                                                <figcaption className="product-name">product {element.id}</figcaption>
                                            </figure>
                                            <section className="product-info">
                                                <div className="product-info-price">
                                                    <i className="fas fa-2x fa-tag label"/>
                                                    <h3>{element.price / 100} zł</h3>
                                                </div>
                                                <div className="product-info-add">
                                                    <i className="fas fa-2x fa-plus-square"/>
                                                </div>
                                            </section>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Products;