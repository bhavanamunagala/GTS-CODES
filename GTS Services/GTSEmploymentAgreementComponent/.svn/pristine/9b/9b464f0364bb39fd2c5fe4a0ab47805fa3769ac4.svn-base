import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useState from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Homepage from './pages/Homepage';
import store from './redux/store';
import EmploymentAgreementPage  from './pages/recruiter/EmploymentAgreementPage'

import RecruiterProfilePage  from './pages/recruiter/RecruiterProfilePage'
















function App() {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/register">Regis</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/dashboard" component={Dashboard} exact></Route>
      </Switch> */}
      <Provider store={store}>
        <Switch>

          <Route path="/login" component={Login} exact></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>
          
   
          
          <Route path="/useState" component={useState}exact></Route>
        
      
          <Route path="/EmploymentAgreementPage" component={EmploymentAgreementPage} exact></Route>
      
          <Route path="/RecruiterProfilePage" component={RecruiterProfilePage} exact></Route>
   
     



          
          
          <Route
            path="/homepage"
            render={props => <Homepage {...props}></Homepage>}
          ></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
