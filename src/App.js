import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './components/LoginPage/Login';
import SignupPage from './components/SignupPage/Signup';


const Signup = () => (
     <SignupPage text = "Please fill in this form to create an account." />
   );
   
const Login = () => (
     <LoginPage />
);
   
class App extends Component {
      render()  {
            return  (
        <Router>
          <div>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </div>
        </Router>
            );
          }
         }
export default App;
