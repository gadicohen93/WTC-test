import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {updateUserObject} from 'AuthenticationActions'

class GetUser extends React.Component {


      constructor(props)
      {
        super(props);
        this.state = {editing: false, accountExists: true, userAccount: false, errorFetch: false, avatarURL:"es.png"};
      }

    onLoginSubmit(event) {
        event.preventDefault();

        var id = this.refs.id.value;

        if (id.length == 0) {
            //show input error
        }
        else {
            fetch('/user/' + id, {
                credentials: 'same-origin',
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                  return response.json() 

                if(response.status == 200) 
                {
                    // hashHistory.push('/');
                }
                else {
                    alert("Login failed");
                    console.log("Login failed");
                    this.setState(errorFetch:true);
                }

            }).then(responseJson => {
                console.log("GOT AVATAR NAME " + JSON.stringify(responseJson));
                if (responseJson["success"])
                {
                    this.setState({editing:true, name: responseJson.name, email: responseJson.email, accountExists:true, avatarURL: responseJson.avatar});
                }
                else
                {
                    this.setState({accountExists:false});
                }
            }).catch( (err) =>
            {
                console.log(err + " < this is the error");
                this.setState({errorFetch: true});
            });
        }
    }

    onEditUser(event) {
        event.preventDefault();
        var name = this.refs.name.value;
        var email = this.refs.email.value;
        if (name.length == 0 || email.length == 0) {
            //show username error
        }
        else {
            fetch('/user/' + this.refs.id.value, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                }),
                error: function()
                {
                    console.log("error");
                }
            }).then(function (response) {
                // this.setState(userAccount: name + " " + email);

                // if (response.status >= 400)
                // {
                //     this.setState(error: true);
                // }
                // else
                // {
                //     this.setState(error:false, userAccount:true);
                // }

                if(response.status == 200) 
                {
                    hashHistory.push('/');
                }
                else {
                    alert("Login failed");
                    console.log("Login failed");
                    this.setState({error:true});
                }

                return response.text();
                // if (response.status == 200) {
                //     hashHistory.push('/login');                
                // }
                // else {
                //     alert("Sign up failed! most likely user name is not available");
                // }
            }).then(function (text)
            {
                console.log(text);
            }).catch( (err) =>
            {
                console.log(err + " < this is the error");
                this.setState({errorFetch: true});
            });
        }
    }

    render() {

        let warningText = "";
        if (!this.state.accountExists)
        {
            warningText = "User doesn't exists";
        }

    console.log("STATE" + JSON.stringify(this.state));
        if (this.state.userAccount)
        {
            warningText = "Success"
        }
        else if (this.state.editing && this.state.errorFetch)
        {
            warningText = "Failure to update account; this update will be committed to database.";
        }
        
        const avatarURL = "/img/flags-normal/" + this.state.avatarURL;
        let warningDiv = <span className="existsAccount"> {warningText} </span>;

        if (!this.state.editing)
        {
            return (
                <div className="container">
                    <h1>Get User</h1>
                    <form onSubmit={this.onLoginSubmit.bind(this)}>
                        <input ref="id" type="text" className="form-control" placeholder="ID" required
                               autoFocus/>
                        <input type="submit" value="Account exists?" />  {warningDiv}

                    </form>
                </div>
            );
        }
        else
        {
            return (
                <div className="container">
                    <h1>Edit User</h1>
                    <form onSubmit={this.onEditUser.bind(this)}>
                        <input ref="id" type="text" className="form-control" readOnly/>
                        <input ref="name" type="text" className="form-control" placeholder={this.state.name}
                               autoFocus/>
                        <input ref="email" type="text" className="form-control" placeholder={this.state.email}
                               />
                        <input type="submit" value="Update user" /> {warningDiv}
                    </form>
                    <img src={avatarURL} className="avatar"/>
                </div>
            );
        }
    }
}


export default GetUser;