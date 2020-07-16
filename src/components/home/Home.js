import React, {Component} from 'react';
import Header from "../general_components/header/Header";
import Content from "./content/Content";
import Footer from "../general_components/footer/Footer";
import CTA from "./cta/CTA";

class Home extends Component
{
    render() {
        const {login, setClearLogin, setUserPanelStep} = this.props
        return (
            <>
                <Header login={login}
                        setClearLogin={setClearLogin}
                        setUserPanelStep={setUserPanelStep}/>
                <Content/>
                <CTA/>
                <Footer/>
            </>
        )
    }
}

export default Home;