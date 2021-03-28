import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthProvider, useAuth } from './contexts/AuthContext';
import GlobalStyle from './styles/global';
  
import Cadastrar from './components/Singup';
import Home from './components/Home';
import Login from './components/Login';

import history from './services/history';

const App: React.FC = () => {
  const {currentUser} = useAuth()
  return (
    <div>
      {/* router-dom ta ouvindo as informaçoes no history qual alteraçao ele pega */}
      <Router history={history}>
        <AuthProvider>
          <Switch>
            {/* SUPER IMPORTANT TO HAVE ALL THE ROUTES AND REDIRECTS SET !!! */
              
            }
            <Route exact path="/cadastro" component= {Cadastrar} />
            <Route exact path="/login" component= {Login} />
            <Route exact path="/home" component= {Home} />
            <Route exact path="/" render={() => {
              //is user authenticated?
              let is = false
              return is ? <Redirect to="/home"></Redirect> : <Redirect to="/login"></Redirect>
            }} />
            <Redirect from="*" to="/" />
          </Switch>
        </AuthProvider>
      
        <GlobalStyle/>
      
      </Router>
    </div>
  );
}

export default App;
