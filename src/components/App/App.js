import React, { useReducer, useContext } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import burgerReducer from '../../reducer';
import BurgerContext from '../../context';

import 'animate.css';

const App = () => {

  const initialState = useContext(BurgerContext);
  const [state, dispatch] = useReducer(burgerReducer, initialState)

  return (
    <BurgerContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <MainContainer />
      </div>
    </BurgerContext.Provider>
  );
}

export default App;
