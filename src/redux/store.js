// store 작성
// 1. 터미널에서 yarn add redux 설치
// 2. import한 createStore에 리듀서를 넣기

import { createStore } from "redux";
import Reducer from "./reducer";

// reducer에서 처리한 값을 store에 저장
const store = createStore(Reducer);

export default store;