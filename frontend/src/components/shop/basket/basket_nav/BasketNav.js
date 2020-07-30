import React, {Component} from 'react';
import "./_basket_nav.scss"

class BasketNav extends Component
{
    render() {
        const {basketStep} = this.props;
        return (
            <>
                <nav className="basket-nav">
                    <div className="container">
                        <ul className="basket-nav-menu">
                            <li>
                                <p className={basketStep === 1 ? "active" : ""}>
                                    Koszyk
                                </p>
                            </li>
                            <li>
                                <p className={basketStep === 2 ? "active" : ""}>
                                    Adres dostawy
                                </p>
                            </li>
                            <li>
                                <p className={basketStep === 3 ? "active" : ""}>
                                    Podsumowanie
                                </p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default BasketNav;