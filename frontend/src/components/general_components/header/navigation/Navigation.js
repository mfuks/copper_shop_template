import React, {Component} from 'react';
import "./_navigation.scss"
import {Link} from "react-router-dom";

class Navigation extends Component
{

    render() {
        return (
            <>
                <nav className="main-nav">
                    <div className="container">
                        <ul className="main-nav-menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Sklep</Link>
                            </li>
                            <li>
                                <Link to="/contact">Kontakt</Link>
                            </li>
                            <li>
                                <Link to="/about_us">O nas</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;