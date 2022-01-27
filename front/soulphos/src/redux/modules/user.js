import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션 타임 지정 
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// 액션 생성 함수 
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
    user: null,
    is_login: false,
};

// 미들웨어 
const loginAction = (user) => {
    return function (dispatch, getState, {history}) {
        dispatch(logIn(user));
    }
}

// 리듀서 생성 (리덕스에서 상태값을 변경하는 함수)
export default handleActions(
{
    [LOG_IN]: (state, action) =>
        produce(state, (draft) => {
            draft.user = action.payload.user;
            draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
            draft.user = null;
            draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

// Action 생성 함수 export

const actionCreators = {
    logIn,
    getUser,
    logOut,
    loginAction
};
  
export { actionCreators };