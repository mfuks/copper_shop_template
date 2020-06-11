import React, {Component} from 'react';
import "./_basket_nav.scss"

class BasketNav extends Component
{
    render() {
        return (
            <>
                <nav className="basket-nav">
                    <div className="container">
                        <ul className="basket-nav-menu">
                            <li>
                                <a href="/#">
                                    Koszyk
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    Adres dostawy
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    Podsumowanie
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default BasketNav;