import React, {Component} from 'react';
import "./_user_panel.scss"
import {Link} from "react-router-dom";
import Header from "../../general_components/header/Header";
import UserPanelOrders from "./user_panel_orders/UserPanelOrders";
import UserPanelData from "./user_panel_data/UserPanelData";
import Footer from "../../general_components/footer/Footer";

class UserPanel extends Component
{

    render() {
        const {login, setClearLogin, path, basketAmount, basketSum, currentUserPanelStep, setUserPanelStep} = this.props
        return (

            <>
                {login &&
                    <>
                        <Header login={login}
                                setClearLogin={setClearLogin}
                                path={path}
                                basketSum={basketSum}
                                basketAmount={basketAmount}/>

                        <section className="user-panel">
                            <div className="container user-panel-container">
                                <section className="user-panel-header">
                                    <h3>Witaj&nbsp;{login}</h3>
                                </section>
                                <section className="user-panel-content">
                                    <nav className="user-panel-content-nav">
                                        <ul className="user-panel-content-nav-menu">
                                            <li>
                                                <button onClick={()=>setUserPanelStep("data")}>
                                                    <h3>Twoje dane</h3>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={()=>setUserPanelStep("orders")}>
                                                    <h3>Zamówienia</h3>
                                                </button>
                                            </li>
                                        </ul>
                                        <Link to="/" onClick={()=>setClearLogin()}>
                                            <h3>Wyloguj</h3>
                                        </Link>
                                    </nav>
                                    <section className="user-panel-content-details">
                                        {currentUserPanelStep === "data" &&
                                        <UserPanelData setUserPanelStep={setUserPanelStep}/>
                                        }
                                        {currentUserPanelStep === "orders" &&
                                        <UserPanelOrders setUserPanelStep={setUserPanelStep}/>
                                        }
                                    </section>
                                </section>

                            </div>
                        </section>
                        <Footer/>
                    </>
                }
            </>

        )
    }
}

export default UserPanel;