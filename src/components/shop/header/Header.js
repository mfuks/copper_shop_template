import React, {Component} from 'react';
import "./_header.scss"
import LogRegister from "./log_register/LogRegister";
import Navigation from "../../general_components/header/navigation/Navigation";

class Header extends Component
{
    render() {
        return (
            <>
                <LogRegister/>
                <Navigation/>
            </>
        )
    }
}

export default Header;