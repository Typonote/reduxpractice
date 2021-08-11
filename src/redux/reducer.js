// reducer 작성

// initState: 초기값 설정
const initState = {
    count: 0
}

// Reducer 정의
const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

// 밖으로 빼기
export default Reducer;