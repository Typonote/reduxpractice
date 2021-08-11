// reducer 작성

// initState: 초기값 설정
const initState = {
    count: 0
}

// Reducer 정의 =>  Reducer는 action을 처리
const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "INCREMENT": // 전달 받은 타입
            return {
                count: state.count + 1
            }
        default:
            return state; // 적용 값 
    }
}

// 밖으로 빼기
export default Reducer;