import React, {Component} from 'react';
import "./_navigation.scss"

class Navigation extends Component
{
    state =
        {
            menu: ["Home", "Sklep", "Kontakt", "O nas"]
        };

    render() {
        const {menu} = this.state;
        return (
            <>
                <nav>
                    <div className="container">
                        <ul className="nav-menu">
                            {menu.map( (e, i) => <li key={i + "-" + e}>{e}</li>)}
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;