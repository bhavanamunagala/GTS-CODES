import React from 'react';

import useState from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactPage  from './pages/recruiter/ContactPage'





function App() {
  return (
    <BrowserRouter>
  
      <Provider store={store}>
        <Switch>

  
   
          
          <Route path="/useState" component={useState}exact></Route>
        
  
          <Route path="/ContactPage" component={ContactPage} exact></Route>
   
     



          
          
          <Route
                ></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
