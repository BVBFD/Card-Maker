import Login from './components/login/login';
import React from 'react';

const App = ({authService}) => {
  return (
    <Login authService={authService}/>
  );
}

export default App;