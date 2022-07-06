import { createAction, handleActions } from 'redux-actions';

//1. 액션 타입을 정의한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션 생성 함수를 정의한다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//3. counter 모듈의 초기상태를 정의한다.
const initialState = {
  number: 0,
};

//4. 리듀서 함수를 정의한다.
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [decrease]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
