import React, {Component} from 'react';
import "./_form.scss"

class Form extends Component
{
    state =
        {
            name: "",
            nameVal: false,
            email: "",
            emailVal: false,
            message: "",
            messageVal: false,
            submitMessage: "",
            submitHandle: false,
        };

    emailValidate = (email) =>
    {
        const emailValidationCharSet = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValidationCharSet.test(email);
    };

    handleChangeName = e =>
    {
        this.setState({
            name: e.target.value.replace(" ", ""),
        });
        if(this.state.name !== "")
        {
            this.setState({
                nameVal: true,
            })
        }
    };

    handleChangeEmail = e =>
    {
        this.setState({
            email: e.target.value
        });
        if(this.emailValidate(this.state.email))
        {
            this.setState({
                emailVal: true,
            })
        }
    };

    handleChangeMessage = e =>
    {
        this.setState({
            message: e.target.value,
        });
        if(this.state.message.length >= 49)
        {
            this.setState({
                messageVal: true,
            })
        }
    };

    handleSubmit = e =>
    {
        e.preventDefault();

        const {name, email, message} = this.state;

        let nameValVar;
        let emailValVar;
        let messageValVar;

        if(name !== "")
        {
            nameValVar = true;
            this.setState({
                nameVal: true,
            })
        }

        if(this.emailValidate(email))
        {
            emailValVar = true;
            this.setState({
                emailVal: true,
            })
        }

        if(message.length > 50)
        {
            messageValVar = true;
            this.setState({
                messageVal: true,
            })
        }

        if(nameValVar && emailValVar && messageValVar)
        {
            const url = `http://localhost:5000/messages/add?firstname=${name}&email=${email}&message=${message}`;

            fetch(url)
            .then(resp =>{
                if (!resp.ok) {
                    throw new Error("something is wrong...");
                }
                else
                {
                    this.setState({
                        submitMessage: "Wiadomośc została wysłana. Skontaktujemy się wkrótce.",
                        name: "",
                        email: "",
                        message: "",
                    });
                    console.log(resp);
                }
            })
            .catch(err => console.error(err));
        }
        else
        {
            this.setState({
                submitMessage: "",
                submitHandle: true,
            });
        }
    };

    render() {
        const {name, email, message, nameVal, emailVal, messageVal, submitHandle, submitMessage} = this.state;
        return (
            <>
                <form className="form" onSubmit={this.handleSubmit}>
                    <legend>
                        Skontaktuj się z nami
                    </legend>
                    {submitMessage ?
                        <div className="form-submit-message">
                            {submitMessage}
                        </div>:
                        <div className="form-submit-invisible" />}
                    <section className="form-section">
                        <fieldset>
                            <label form="contact-name">Twoje imię:</label>
                            <input type="text"
                                   placeholder="Your name"
                                   id="contact-name"
                                   name="name"
                                   value={name}
                                   onChange={this.handleChangeName}/>
                            {(!nameVal && submitHandle) ?
                                <div className="form-error">
                                    Podane imię jest nieprawidłowe!
                                </div> :
                                <div className="form-error-invisible"/>}
                            <label form="contact-email">E-mail:</label>
                            <input type="text"
                                   placeholder="E-mail"
                                   id="contact-email"
                                   name="email"
                                   value={email}
                                   onChange={this.handleChangeEmail}/>
                            {(!emailVal && submitHandle) ?
                                <div className="form-error">
                                    Podany email jest nieprawidłowy!
                                </div> :
                                <div className="form-error-invisible"/>}
                        </fieldset>
                        <fieldset>
                            <label form="contact-message">Twoja wiadomość:</label>
                            <textarea placeholder="Your message"
                                      id="message"
                                      name="message"
                                      value={message}
                                      onChange={this.handleChangeMessage}/>
                            {(!messageVal && submitHandle) ?
                                <div className="form-error">
                                    Wiadomość musi zawierać min. 50 znaków!
                                </div> :
                                <div className="form-error-invisible"/>}
                        </fieldset>
                    </section>
                    <input className="form-btn" type="submit" value="Wyślij wiadomość"/>
                </form>
            </>
        )
    }
}

export default Form;