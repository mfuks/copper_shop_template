import React, {Component} from 'react';
import "./_log_register.scss"
import {Link} from "react-router-dom";
import LogoPlain from "../logo/logo_plain/LogoPlain";

class LogRegister extends Component
{
    render() {
        const {login, path, basketSum, basketPath, basketAmount} = this.props;
        return (
            <>
                <header className="lr">
                    <div className="container lr-container">
                        <LogoPlain/>
                        <section className="lr-user">
                            {login &&
                            <Link className="lr-user-login-link" to="/user-panel">
                                <i  className="lr-user-login-icon far fa-user fa-2x lr-user-icon"/>
                            </Link>
                            }
                            <h4 className="lr-user-login">
                                {login ?
                                    <span className="lr-user-login-name">
                                        {login}
                                    </span> :
                                    <>
                                        <Link className="lr-user-login-link" to="/login">Logowanie</Link>
                                        <span>&nbsp;|&nbsp;</span>
                                        <Link className="lr-user-login-link" to="/registration">Rejestracja</Link>
                                    </>}
                            </h4>

                            {((path === "/shop") || (basketPath === "/basket")) &&
                                <>
                                    <Link className="lr-user-basket-link" to="/basket">
                                        <i  className="lr-user-basket-link-icon fas fa-2x fa-shopping-basket"/>
                                    </Link>

                                    <h4 className="lr-user-basket">
                                        <span>
                                            {basketSum && basketSum.substr(0, basketSum.length-2)},
                                            {basketSum && basketSum.substr(basketSum.length-2, 2)} zł
                                        </span>
                                        <div className="lr-user-basket-products">
                                            <span>
                                                {basketAmount}
                                            </span>
                                        </div>
                                    </h4>
                                </>}
                        </section>
                    </div>
                </header>
            </>
        )
    }
}

export default LogRegister;