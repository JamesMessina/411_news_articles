import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store'
import List from './containers/List'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{color:'red', textDecoration: 'underline'}}>Bands</h1>
        <List />
      </div>
    </Provider>
  );
}

export default App;
