import React, {Component} from 'react';
import "./_about_us.scss"
import Footer from "../general_components/footer/Footer";
import Header from "../general_components/header/Header";

class AboutUs extends Component
{

    render() {
        return (
            <>
                <Header login={this.props.login}
                        setClearLogin={this.setClearLogin}/>
                <section className="about-us">
                    <div className="container">
                        <header className="about-us-header">
                            <p>
                                Sugar plum bear claw cake pudding cake
                            </p>
                            <p>
                                chocolate bonbon gummi bears.
                            </p>
                        </header>
                        <section className="about-us-content">
                            <div className="about-us-content-img"/>
                            <div className="about-us-content-text">
                                Cupcake pie carrot cake bonbon tiramisu. Tootsie roll bear claw caramels caramels
                                brownie topping. Sweet apple pie powder dragée liquorice cake bonbon lollipop donut.
                                Halvah marshmallow powder danish cupcake dessert jujubes tiramisu jelly. Sugar plum
                                tart dessert cake. Sugar plum bear claw cake pudding biscuit cake chocolate bonbon
                                gummi bears. Chocolate bar chocolate powder cupcake fruitcake powder cheesecake.
                                Bear claw pudding liquorice fruitcake carrot cake. Tiramisu jelly tiramisu candy
                                canes gummi bears cookie. Jelly-o fruitcake jelly-o lemon drops carrot cake
                                marshmallow gummi bears powder. Halvah pie tiramisu I love cheesecake I love.
                                Muffin cake cotton candy dragée caramels cake topping apple pie. Topping macaroon
                                jelly marshmallow pie icing sweet. Biscuit tart muffin I love jujubes chocolate
                                bar dessert sweet roll cupcake.
                            </div>
                        </section>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default AboutUs;