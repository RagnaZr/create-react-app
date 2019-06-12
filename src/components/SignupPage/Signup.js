import React from "react";

import { FormErrors } from './FormErrors';
import CountryRegion from"./CountryRegion";
import BirthdayForm from "./BirthdayForm";
import "./Signup.css";


class SignupPage extends React.Component{
    constructor(){
        super();
        this.state ={
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        switch(fieldName) {
          case 'email':
            emailValid = value.match(re);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
    

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                
                <div className ="container">
                    <h1>Register</h1>
                    <p>{this.props.text}</p><br />
                    <b>
                       <FormErrors formErrors ={this.state.formErrors} />
                    </b>
                    <div className={this.errorClass(this.state.formErrors.email)}>
                        <label><b>Email address</b></label><br />
                        <input 
                        type="email"
                        name="email"
                        placeholder="Enter Email" 
                        value={this.state.email}
                        onChange={this.handleUserInput}
                        /><br />
                    </div>
                    <div className={this.errorClass(this.state.formErrors.password)}>
                        <label><b>Password</b></label><br />
                        <input 
                        type="password" 
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}
                        /><br />
                    </div>
                    <BirthdayForm />
                    <CountryRegion />
                    <button type="submit" className="registerbtn"
                     disabled={!this.state.formValid} >Register</button>
                </div>
            </form>
            
        );
    }
}

export default SignupPage;