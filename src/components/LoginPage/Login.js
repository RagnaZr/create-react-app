
import React from "react";

import "./Login.css";

class LoginPage extends React.Component{
    constructor(){
        super();
        this.state ={
            email: "",
            password: "",
        };
    }
    validate() {
    return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleUsernameChange = evt => {
        this.setState({ email: evt.target.value });
    };
    
    handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      const {email, password} = this.state;
      alert(`U're Logged in with username: ${email} password: ${password}`);
     };



    render() {
        return(
            <div className= "container">
            <form onSubmit = {this.handleSubmit}>
                <div className ="row">
                    <div className="coll">
                    <h2 >Login</h2>
                    <label><b>Email</b></label><br />
                    <input 
                    type="email" 
                    placeholder="Enter Username" 
                    value={this.state.email}
                    onChange={this.handleUsernameChange}
                    /><br />

                    <label><b>Password</b></label><br />
                    <input 
                    type="password" 
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}/><br />
                    <button type="submit" className="registerbtn" disabled={!this.validate()} >Login</button>
                    </div>
                </div>
            </form>
            </div>
            
        );
    }
}

export default LoginPage;