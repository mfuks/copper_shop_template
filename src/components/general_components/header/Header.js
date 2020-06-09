import React, {Component} from 'react';
import LogRegister from "./log_register/LogRegister";
import Navigation from "./navigation/Navigation";

class Header extends Component
{
    render() {
        return (
            <>
                <LogRegister login={this.props.login}/>
                <Navigation/>
            </>
        )
    }
}

export default Header;