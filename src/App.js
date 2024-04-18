import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Taskinput from "./Components/Taskinput";
import Tasklist from "./Components/Tasklist";
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <div className="text-center main">
        <header className="text text-secondary-color bold italic weight-600 p-t">To Do App</header>
        <Taskinput />
        <Tasklist />
      </div>
    </Provider>
  );
}

export default App;
