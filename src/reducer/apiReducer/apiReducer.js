import { LOADING, SUCCESS, REJECTED } from "./apiReducerType";
export const ApiInitialState = {
    // datas: undefined,
    datas: [],
    data: null,
    isloding: false,
    isSuccess: false,
    error: ""
}

export const apiReducer = (state, action) => {
    switch (action.type) {
        case LOADING: {
            return state = {
                ...state,
                isloding: true
            }
        }
        case SUCCESS: {
            return state = {
                isloding: false,
                isSuccess: true,
                datas: action.payload,
                data:action.payload,
                error: ""
            }
        }

        case REJECTED: {
            return state = {
                isloding: false,
                isSuccess: false,
                datas: [],
                data:null,
                error: action.payload
            }
        }
        default:
            return state;
    }
}