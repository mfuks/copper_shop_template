import React, {Component} from 'react';
import "./../_lar.scss"
import "./_login.scss"
import Logo from "../../general_components/header/logo/Logo";
import Footer from "../../general_components/footer/Footer";
import {Link} from "react-router-dom";
import SubmitLar from "../submit_lar/SubmitLar";

class Login extends Component
{
    state =
        {
            users: "",

            login: "",
            loginExist: false,
            password: "",
            passwordVal: false,
            passwordToConfirm: "",

            isLogIn: false,
            loginUser: "",
            submitMessage: "",
            submitHandle: false,
        };

    componentDidMount()
    {
        const url = "http://localhost:3012/users";

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(users =>
        {
            this.setState({
                users: users
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    handleChangePassword = e =>
    {
        this.setState({
            password: e.target.value.replace(" ", "")
        });

        if(e.target.value === this.state.passwordToConfirm)
        {
            this.setState({
                passwordVal: true,
            })
        }
        else
        {
            this.setState({
                passwordVal: false,
            })
        }
    };

    handleChangeLogin = e =>
    {
        this.setState({
            login: e.target.value.replace(" ", "")
        });

        for (let i = 0; i < this.state.users.length; i++)
        {
            this.setState({
                loginExist: false,
            });

            if(this.state.users[i].login === e.target.value)
            {
                this.setState({
                    loginExist: true,
                    loginUser: e.target.value,
                    passwordToConfirm: this.state.users[i].password
                });
                break;
            }
        }
    };



    handleSubmit = e =>
    {
        e.preventDefault();

        const {loginExist, passwordVal} = this.state;

        if(loginExist && passwordVal)
        {

            console.log(this.state.login);
            this.props.setLogin(this.state.login);

            this.setState({
                //login: "",
                loginVal: false,
                password: "",
                passwordVal: false,
                passwordToConfirm: "",
                submitMessage: "Witaj " + this.state.loginUser,
            });
        }
        else
        {
            this.setState({
                submitMessage: "",
                submitHandle: true,
            });
        }
    };



    render() {
        const {login, password, passwordVal, loginExist, submitHandle, submitMessage} = this.state;
        return (
            <>
                <Logo/>
                <section className="login lar">
                    <div className="container lar-container">
                        {!submitMessage ?
                        <div className="login-content lar-content">
                            <form onSubmit={this.handleSubmit}>
                                <legend>
                                    Logowanie
                                </legend>
                                <div className="login-content-form-img">
                                    <i className="fas fa-5x fa-user-alt"/>
                                </div>
                                <label className="obligatory">Login:
                                    <input type="text"
                                           placeholder="Login"
                                           name="login"
                                           value={login}
                                           onChange={this.handleChangeLogin}/>
                                </label>
                                {(!loginExist && submitHandle) ?
                                    <div className="form-error">
                                        Podany login jest nieprawidłowy
                                    </div>:
                                    <div className="form-error-invisible"/>}
                                <label className="obligatory">Hasło:
                                    <input type="password"
                                           placeholder="Password"
                                           name="password"
                                           value={password}
                                           onChange={this.handleChangePassword}/>
                                </label>
                                {(!passwordVal && submitHandle) ?
                                    <div className="form-error">
                                        Podane hasło jest nieprawidłowe
                                    </div>:
                                    <div className="form-error-invisible"/>}
                                <div className="lar-content-form-btns">
                                    <Link to="/registration">do rejestracji</Link>
                                    <input type="submit" value="zaloguj"/>
                                </div>
                            </form>
                        </div>:
                        <SubmitLar submitMessage={submitMessage}/>}
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Login;