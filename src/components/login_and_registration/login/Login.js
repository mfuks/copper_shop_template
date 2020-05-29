import React, {Component} from 'react';
import "./../_lar.scss"
import "./_login.scss"
import Logo from "../../general_components/header/logo/Logo";
import Footer from "../../general_components/footer/Footer";
import {Link} from "react-router-dom";

class Login extends Component
{
    render() {
        return (
            <>
                <Logo/>
                <section className="login">
                    <div className="container lar-cont">
                        <div className="login-content">
                            <form>
                                <legend>
                                    Logowanie
                                </legend>
                                <div className="login-content-form-img">
                                    <i className="fas fa-5x fa-user-alt"/>
                                </div>
                                <label>Login
                                    <input type="text"
                                           placeholder="Login"/>
                                </label>
                                <label>Hasło
                                    <input type="text"
                                           placeholder="Password"/>
                                </label>
                                <div className="lar-content-form-btns">
                                    <Link to="/registration">do rejestracji</Link>
                                    <input type="submit" value="zaloguj"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Login;