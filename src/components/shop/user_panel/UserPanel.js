import React, {Component} from 'react';
import "./_user_panel.scss"
import {Link} from "react-router-dom";
import Header from "../../general_components/header/Header";
import UserPanelOrders from "./user_panel_orders/UserPanelOrders";
import UserPanelData from "./user_panel_data/UserPanelData";
import UserPanelOrderView from "./user_panel_order_view/UserPanelOrderView";
import Footer from "../../general_components/footer/Footer";

class UserPanel extends Component
{
    state =
        {
            currentOrderView: "",
            orders: []
        }

    componentDidMount() {

        const urlOrders = "http://localhost:3014/orders";

        fetch(urlOrders)
        .then(response => {
            return response.json()
        })
        .then(orders =>
        {
            let userOrders = [];
            for (let i = 0; i < orders.length; i++)
            {
                if(orders[i].login === this.props.login)
                {
                    userOrders.push(orders[i]);
                }
            }
            this.setState({
                orders: userOrders
            });

        })
        .catch(function(error) {
            console.log(error);
        });

    };

handleChangeCurrentOrderView = (currentOrderView) =>
{
    this.setState({
        currentOrderView: currentOrderView
    })
}

    render() {
        const {login, setClearLogin, path, basketAmount, basketSum, currentUserPanelStep, setUserPanelStep,
            priceDisplay} = this.props
        const {currentOrderView, orders} = this.state
        return (

            <>
                {login ?
                    <>
                        <Header login={login}
                                setClearLogin={setClearLogin}
                                path={path}
                                basketSum={basketSum}
                                basketAmount={basketAmount}/>

                        <section className="user-panel">
                            <div className="container user-panel-container">
                                <section className="user-panel-header">
                                    <h3 className="user-panel-header-content">Witaj&nbsp;{login}</h3>
                                </section>
                                <section className="user-panel-content">
                                    <nav className="user-panel-content-nav">
                                        <ul className="user-panel-content-nav-menu">
                                            <li>
                                                <button onClick={()=>setUserPanelStep("data")}>
                                                    <h3>
                                                        Twoje dane
                                                    </h3>
                                                    <i className={currentUserPanelStep === "data" ? "fas fa-lg fa-caret-right" : ""}/>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={()=>setUserPanelStep("orders")}>
                                                    <h3>
                                                        Zamówienia
                                                    </h3>
                                                    <i className={currentUserPanelStep === "orders" ? "fas fa-lg fa-caret-right" : ""}/>
                                                </button>
                                            </li>
                                        </ul>
                                        <Link to="/" onClick={()=>setClearLogin()}>
                                            <h3>Wyloguj</h3>
                                        </Link>
                                    </nav>
                                    <section className="user-panel-content-details">
                                        {(currentUserPanelStep === "data") &&
                                        <UserPanelData setUserPanelStep={setUserPanelStep}
                                                       login={login}/>
                                        }
                                        {(currentUserPanelStep === "orders" && !currentOrderView) &&
                                        <UserPanelOrders setUserPanelStep={setUserPanelStep}
                                                         login={login}
                                                         priceDisplay={priceDisplay}
                                                         handleChangeCurrentOrderView={this.handleChangeCurrentOrderView}
                                                         orders={orders}/>
                                        }
                                        {(currentOrderView && !(currentUserPanelStep === "data")) && <UserPanelOrderView priceDisplay={priceDisplay}
                                                                                 currentOrderView={currentOrderView}
                                                                                 login={login}
                                                                                 handleChangeCurrentOrderView={this.handleChangeCurrentOrderView}
                                                                                 orders={orders}/>}
                                    </section>
                                </section>

                            </div>
                        </section>
                        <Footer/>
                    </>:

                    <section className="user-panel-logout">
                        <Link className="btn" to="/">
                            Home
                        </Link>
                    </section>

                }
            </>

        )
    }
}

export default UserPanel;