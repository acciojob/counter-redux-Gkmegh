
import React from "react";
import './../styles/App.css';
import store from './store.js'
import {Provider} from "react-redux"
import Counter from './Counter.js'


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Counter App</h1>
        <Counter/>
      </div>
    </Provider>
  )
}

export default App
