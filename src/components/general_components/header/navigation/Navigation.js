import React, {Component} from 'react';
import "./_navigation.scss"
import {Link} from "react-router-dom";

class Navigation extends Component
{

    render() {
        const {path} = this.props
        return (
            <>
                <nav className="main-nav">
                    <div className="container">
                        <ul className="main-nav-menu">
                            <li>
                                <Link className={path === "/" ? "active" : ""} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className={path === "/shop" ? "active" : ""} to="/shop">Sklep</Link>
                            </li>
                            <li>
                                <Link className={path === "/contact" ? "active" : ""} to="/contact">Kontakt</Link>
                            </li>
                            <li>
                                <Link className={path === "/about_us" ? "active" : ""} to="/about_us">O nas</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;