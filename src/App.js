import React from 'react'
import './App.css';
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
