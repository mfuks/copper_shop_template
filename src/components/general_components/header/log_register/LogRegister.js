import React, {Component} from 'react';
import "./_log_register.scss"
import {Link} from "react-router-dom";
import Logo from "../logo/Logo";
import LogoPlain from "../logo/logo_plain/LogoPlain";

class LogRegister extends Component
{
    state =
        {
            mouseEnter: false
        };

    EnterUser = () =>
    {
        this.setState({
            mouseEnter: true
        });
    };

    LeaveUser = () => {
        this.setState({
            mouseEnter: false
        });
    };

    render() {
        const {mouseEnter} = this.state;
        const {login} = this.props;
        return (
            <>
                <header className="lr">
                    <div className="container lr-container">
                        <LogoPlain/>
                        <section className="lr-user">
                            {login && <i className="far fa-user fa-2x lr-user-icon"/>}
                            <h4 className="lr-user-login">
                                {login ?
                                    <h4 className="lr-user-login-name"
                                        onMouseEnter={this.EnterUser}
                                        onMouseLeave={this.LeaveUser}
                                        onClick={()=>this.props.setClearLogin()}>
                                        {this.props.login}
                                    </h4> :
                                    <>
                                        <Link className="lr-user-login-link" to="/login">Logowanie</Link>
                                        <span>&nbsp;|&nbsp;</span>
                                        <Link className="lr-user-login-link" to="/registration">Rejestracja</Link>
                                    </>}
                            </h4>
                            <h4 className={(mouseEnter && login)? "lr-user-login-info" : "invisible"}>
                                Wyloguj
                            </h4>
                        </section>
                    </div>
                </header>
            </>
        )
    }
}

export default LogRegister;