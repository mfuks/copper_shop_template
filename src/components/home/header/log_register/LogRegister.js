import React, {Component} from 'react';
import "./_log_register.scss"

class LogRegister extends Component
{
    render() {
        return (
            <>
                <div className="lr">
                    <div className="container lr-cont">
                        <div className="lr-logo">

                        </div>
                        <div className="lr-user">
                            <i className="far fa-user fa-2x lr-user-icon"/>
                            <h4 className="lr-user-login">Login</h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LogRegister;