import React, {Component} from 'react';
import "./_log_register.scss"
import {Link} from "react-router-dom";
import LogoPlain from "../logo/logo_plain/LogoPlain";

class LogRegister extends Component
{
    state =
        {
            mouseEnterUser: false,
            mouseEnterBasket: false
        };

    EnterUser = () =>
    {
        this.setState({
            mouseEnterUser: true
        });
    };

    LeaveUser = () => {
        this.setState({
            mouseEnterUser: false
        });
    };

    EnterBasket = () =>
    {
        this.setState({
            mouseEnterBasket: true
        });
    };

    LeaveBasket = () => {
        this.setState({
            mouseEnterBasket: false
        });
    };

    render() {
        const {mouseEnterUser, mouseEnterBasket} = this.state;
        const {login, path} = this.props;
        return (
            <>
                <header className="lr">
                    <div className="container lr-container">
                        <LogoPlain/>
                        <section className="lr-user">
                            {login && <i className="lr-user-login-icon far fa-user fa-2x lr-user-icon"
                                         onMouseEnter={this.EnterUser}
                                         onMouseLeave={this.LeaveUser}
                                         onClick={()=>this.props.setClearLogin()}/>}
                            <h4 className="lr-user-login">
                                {login ?
                                    <span className="lr-user-login-name">
                                        {this.props.login}
                                    </span> :
                                    <>
                                        <Link className="lr-user-login-link" to="/login">Logowanie</Link>
                                        <span>&nbsp;|&nbsp;</span>
                                        <Link className="lr-user-login-link" to="/registration">Rejestracja</Link>
                                    </>}
                                <div className={(mouseEnterUser && login)? "lr-user-login-info" : "invisible"}>
                                    Wyloguj
                                </div>
                            </h4>

                            {(path === "/shop" && login) &&
                                <>
                                    <i  className="lr-user-basket-icon fas fa-2x fa-shopping-basket"
                                       onMouseEnter={this.EnterBasket}
                                       onMouseLeave={this.LeaveBasket}/>
                                    <h4 className="lr-user-basket">
                                        <span>
                                            350,00 zł {/*tu zmienna*/}
                                        </span>
                                        <div className="lr-user-basket-products">
                                            <span>
                                                35 {/*tu zmienna*/}
                                            </span>
                                        </div>
                                        <div className={(mouseEnterBasket && login)? "lr-user-basket-info" : "invisible"}>
                                            Koszyk
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