import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE} from "./userTypes";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: {
            return {
                ...state,
                loading: true

            }
        }
        case FETCH_USER_SUCCESS: {
            return {
                users: action.payload,
                loading: false,
                error: ''
            }
        }
        case FETCH_USER_FAILURE: {
            return {
                users: [],
                loading:false,
                error: action.payload

            }
        }

        case ADD_USER_REQUEST: {
            return {
                ...state,
                loading: true

            }
        }
        case ADD_USER_SUCCESS: {
            return {
                users: [...state.users, action.payload],
                loading: false,
                error: ''
            }
        }
        case ADD_USER_FAILURE: {
            return {
                users: [],
                loading:false,
                error: action.payload

            }
        }
        default: return state
    }
}

export default userReducer;