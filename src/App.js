import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Taskinput from './Components/Taskinput';
import Tasklist from "./Components/Tasklist";
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do Application</h1>
        <Taskinput />
        <Tasklist />
      </div>
    </Provider>
  );
}

export default App;
