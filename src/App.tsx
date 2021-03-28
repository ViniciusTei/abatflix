import React from 'react';
import Home from './components/Home';
import Login from './components/Login';

import { AuthProvider } from './contexts/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  
  return (
    <div>
      <AuthProvider>
        <Login></Login>
        <GlobalStyle/>
      </AuthProvider>

    </div>
  );
}

export default App;
