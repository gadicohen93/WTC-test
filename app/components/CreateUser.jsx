import React, { Component, PropTypes } from 'react'
import AvatarPicker from './Avatar';

let {hashHistory} = require('react-router');

class CreateUser extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
         error:false,
         avatar: "es.png", // initialize state from value prop given by redux-form
         };
    }

    onFormSubmit(event) {
        event.preventDefault();
        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var avatar = this.state.avatar;
        console.log(avatar + " " + " AVATAR");
        if (name.length == 0 || email.length == 0) {
            //show username error
        }
        else {
            fetch('/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    avatar: avatar
                })
            }).then(function (response) {
                console.log(response.body);

                if (response.status == 200) {
                    hashHistory.push('/');                
                }
                
                return response.text();

            }).then(function (text)
            {
                console.log(text);
            }).catch( (err) =>
            {
                this.setState({error: true});

            });;
        }
    }

     handleChange(val) {
        // const val = event.target.value;
        console.log(val + " handling change? " );
        this.setState({avatar: val})
      }


    render() {
        const avatar = this.state.avatar;
        var warning = "";
        if (this.state.error)
        {
            warning =  "Failure to update account; this update will be committed to database."
        }

        var handleChange = this.handleChange;
        return (<div className="container">
            <h1>Create user</h1>
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input ref="name" type="text" placeholder="Name" required autoFocus/>
                <input ref="email" type="text" placeholder="Email" />
                <div className="input">Choose your avatar:</div>
                <AvatarPicker handler={handleChange.bind(this)} value={avatar} />
                <input type="submit" value="Create" />
                <div className="existsAccount"> {warning} </div>
            </form>


        </div>);
    }
}

export default CreateUser;