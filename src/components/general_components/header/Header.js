import React, {Component} from 'react';
import LogRegister from "./log_register/LogRegister";
import Navigation from "./navigation/Navigation";

class Header extends Component
{
    render() {
        return (
            <>
                <LogRegister login={this.props.login}
                             setClearLogin={this.props.setClearLogin}
                             path={this.props.path}
                             basket={this.props.basket}
                             basketSum={this.props.basketSum}/>
                <Navigation/>
            </>
        )
    }
}

export default Header;