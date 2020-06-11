import React, {Component} from 'react';
import LogRegister from "./log_register/LogRegister";
import Navigation from "./navigation/Navigation";

class Header extends Component
{
    render() {
        const {login, setClearLogin, path, basket, basketSum, basketPath} = this.props;
        return (
            <>
                <LogRegister login={login}
                             setClearLogin={setClearLogin}
                             path={path}
                             basketPath={basketPath}
                             basket={basket}
                             basketSum={basketSum}
                />
                <Navigation/>
            </>
        )
    }
}

export default Header;