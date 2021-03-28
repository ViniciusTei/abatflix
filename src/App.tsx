import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';
import GlobalStyle from './styles/global';
  
import Cadastrar from './components/Singup';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoute from './services/PrivateRouter';

import history from './services/history';

const App: React.FC = () => {

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
            <PrivateRoute exact path="/home" component= {Home} />
            <PrivateRoute exact path="/perfil" component= {Profile} />
            <PrivateRoute exact path="/" component={Home}/>
            <Redirect from="*" to="/" />
          </Switch>
        </AuthProvider>
      
        <GlobalStyle/>
      
      </Router>
    </div>
  );
}

export default App;
