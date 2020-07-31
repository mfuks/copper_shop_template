import React, {Component} from 'react';
import "./_user_panel_data.scss"

class UserPanelData extends Component
{
    state = {
        user: []
    };

    componentDidMount() {
        const urlUsers = "/users";
        let userId

        fetch(urlUsers)
        .then(response => {
            return response.json()
        })
        .then(users =>
        {
            for (let i = 0; i < users.length; i++) {
                if(this.props.login.toString().localeCompare(users[i].login.toString()) === 0)
                {
                    userId = users[i].user_id;
                    const urlUserId = `http://localhost:5000/users/id?user_id=${userId}`;

                    fetch(urlUserId)
                    .then(response => {
                        return response.json()
                    })
                    .then(user =>
                    {
                        this.setState({
                            user: user[0]
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });

                    break;
                }
            }
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
                    <p>{user.firstname}&nbsp;{user.lastname}</p>
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