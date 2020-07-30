import React, {Component} from 'react';
import "./_product_info.scss"

class ProductInfo extends Component
{

    componentWillUnmount() {
        this.props.handleCurrentProductClear();
    }


    render() {

        const {currentProduct, handleAddBasketElement, handleCurrentProductClear} = this.props
        return (
            <>
                <section className="product-info">
                    <div className="container">
                        <div className="product-info-content">
                            <section className="product-info-content-left">
                                <figure className="product-info-img">
                                    <img src={"./assets/products/" + currentProduct.id + ".jpeg"}
                                         alt={"product_" + currentProduct.id}/>
                                    <figcaption className="product-info-quantity">
                                        <p>Dostępność:&nbsp;{currentProduct.quantity}</p>
                                    </figcaption>
                                </figure>
                            </section>
                            <section className="product-info-content-right">
                                <header>
                                    <p className="product-name-id">product&nbsp;<span>{currentProduct.id}</span></p>
                                    <p className="product-name-code">{currentProduct.code}</p>
                                </header>
                                <p>{currentProduct.description}</p>
                                <div className="product-info-add">
                                    <i className="fas fa-2x fa-plus-square product-info-add-btn"
                                       onClick={(e)=>handleAddBasketElement(e, currentProduct)}/>
                                    <button className="btn confirm-btn" onClick={()=>handleCurrentProductClear()}>
                                        Wróć do sklepu
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ProductInfo;