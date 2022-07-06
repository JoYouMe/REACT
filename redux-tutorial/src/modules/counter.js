//1. 액션 타입을 정의한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션 생성 함수를 정의한다.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//3. counter 모듈의 초기상태를 정의한다.
const initialState = {
  number: 0,
};

//4. 리듀서 함수를 정의한다.
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
