import React, {useState,useEffect} from "react";
import {Provider, useDispatch} from "react-redux";
import store from "./redux/store";
import { increment } from "./redux/action";

// 1. dispatch에 action을 담아 reducer로 보낸다. => useDispatch()를 사용하여 action을 보내야 한다.

function Count() {
  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(increment());
  }

    return (
      <div>
        <button onClick={handleClick}>증가</button>
        <p>카운트 : {}</p>
      </div>
    )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
      </div>
    </Provider>
  );
}

export default App;