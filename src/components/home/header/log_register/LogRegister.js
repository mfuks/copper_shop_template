import React, {Component} from 'react';
import "./_log_register.scss"

class LogRegister extends Component
{
    render() {
        return (
            <>
                <header className="lr">
                    <div className="container lr-cont">
                        <section className="lr-logo">

                        </section>
                        <section className="lr-user">
                            <i className="far fa-user fa-2x lr-user-icon"/>
                            <h4 className="lr-user-login">Login</h4>
                        </section>
                    </div>
                </header>
            </>
        )
    }
}

export default LogRegister;