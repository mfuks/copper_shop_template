import React, {Component} from 'react';
import "./_user_panel_data.scss"

class UserPanelData extends Component
{
    state = {
        user: []
    };

    componentDidMount() {

        const url = "http://localhost:3012/users";

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(users =>
        {
            let user

            for (let i = 0; i < users.length; i++) {
                if(users[i].login === this.props.login)
                {
                    user = users[i]
                }
            }

            this.setState({
                user: user
            });

        })
        .catch(function(error) {
            console.log(error);
        });
    };


    render() {
        const {user} = this.state
        return (
            <>
                <section className="user-panel-data">
                    <h4>
                        Adres:
                    </h4>
                    <p>{user.name}&nbsp;{user.surname}</p>
                    <p>{user.address}</p>
                    <p>{user.zipCode}&nbsp;{user.city}</p>
                    <h4>
                        Dane kontaktowe:
                    </h4>
                    <p>email:&nbsp;{user.email}</p>
                    <p>telefon:&nbsp;{user.phone}</p>
                </section>
            </>
        )
    }
}

export default UserPanelData;