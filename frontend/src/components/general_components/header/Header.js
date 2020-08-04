import React, {Component} from 'react';
import LogRegister from "./log_register/LogRegister";
import Navigation from "./navigation/Navigation";

class Header extends Component
{
    render() {
        const {login, setClearLogin, path, basketSum, basketPath, basketAmount} = this.props;
        return (
            <>
                <LogRegister login={login}
                             setClearLogin={setClearLogin}
                             path={path}
                             basketPath={basketPath}
                             basketSum={basketSum}
                             basketAmount={basketAmount}
                />
                <Navigation path={path}/>
            </>
        )
    }
}

export default Header;