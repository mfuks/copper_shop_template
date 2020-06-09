import React, {Component} from 'react';
import "./_log_register.scss"
import {Link} from "react-router-dom";

class LogRegister extends Component
{
    render() {
        return (
            <>
                <header className="lr">
                    <div className="container lr-cont">
                        <section className="lr-logo">
                            <Link to="/">
                                <div className="lr-logo-img"/>
                            </Link>
                        </section>
                        <section className="lr-user">
                            <i className="far fa-user fa-2x lr-user-icon"/>
                            <h4 className="lr-user-login">
                                {this.props.login ?
                                    this.props.login :
                                    <>
                                        <Link className="lr-user-login-link" to="/login">Login</Link>
                                        <span>&nbsp;|&nbsp;</span>
                                        <Link className="lr-user-login-link" to="/registration">Register</Link>
                                    </>}
                            </h4>
                        </section>
                    </div>
                </header>
            </>
        )
    }
}

export default LogRegister;