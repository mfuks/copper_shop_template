import React, {Component} from 'react';
import "./_basket_thanks.scss"

class BasketThanks extends Component
{
    componentWillUnmount() {
        this.props.basketSetClearStep();
    }

    render() {
        return (
            <>
                <section className="basket-thanks">
                    <div className="container basket-container">
                        <section className="basket-info">
                            <div className="basket-info-content">
                                <h3>Dziękujemy za zakup</h3>
                            </div>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default BasketThanks;