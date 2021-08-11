import React, {useState,useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./redux/store";
import { increment } from "./redux/action";

// 4. dispatch에 action을 담아 reducer로 보낸다. => useDispatch()를 사용하여 action을 보내야 한다.
// 5. useSelector를 이용해 값을 불러옴

// Count2 컴포넌트는 액션 전달 X => count 컴포넌트가 변경한 값을 store에서 단순히 가져옴 
function Count2() {
  const count = useSelector((state) => state.count);
  return (
    <p>{count}</p>
  )
}

function Count() {
  const dispatch = useDispatch();

  // store에서 값을 가져오기 위해 useSelector를 사용 
  const count = useSelector((state) => state.count);

  const handleClick = () => { // 클릭 시,
    dispatch(increment()); // 액션을 전달
  }
  
    return (
      <div>
        <button onClick={handleClick}>증가</button>
        <p>{count}</p>
      </div>
    )
}

// Provider는 Provider내부에 위치한 자식 컴포넌트들이 store를 사용할 수 있게 해준다.
// 동일 선상에 컴포넌트에 값이 전달된다. => <Count /> <Count2 />

function App() {
  return (
    <Provider store={store}>
      <Count />
      <Count2 />
    </Provider>
  );
}

// // 전반적인 동작과정
// 1. action creater가 action을 생성하고 dispatch에 전달 됨
// 2. dispatch가 생성된 action을 reducer에게 전달(redux 자체 동작과정)
// 3. reducer는 action의 type에 따라 정의된 동작을 하고 업데이트 된 state를 store에게 반환
// 4. subscribe ( useSelector ) 가 변화를 감지하고 컴포넌트에서 사용하는 변수를 업데이트.

export default App;

