import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';
import GlobalStyle from './styles/global';
  
import Cadastrar from './components/Singup';
import Home from './components/Home';
import Login from './components/Login';

const App: React.FC = () => {
  
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/cadastro" exact component= {Cadastrar} />
            <Route path="/login" exact component= {Login} />
            <Route path="/home" exact component= {Home} />
            <Route path="/" exact render={() => {
              //is user authenticated?
              let is = true
              return is ? <Redirect to="/home"></Redirect> : <Redirect to="/login"></Redirect>
            }} />
          </Switch>
        </AuthProvider>
      
        <GlobalStyle/>
      </Router>
    </div>
  );
}

export default App;
