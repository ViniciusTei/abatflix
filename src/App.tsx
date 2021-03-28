import React from 'react';
import Cadastrar from './components/Singup';

import { AuthProvider } from './contexts/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  
  return (
    <div>
      <AuthProvider>
        <Cadastrar></Cadastrar>
        <GlobalStyle/>
      </AuthProvider>

    </div>
  );
}

export default App;
