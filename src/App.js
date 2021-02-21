import React from 'react'
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer';
import CakeContainer from './components/CakeContainer'


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
