import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

//remember we can set parameters with default values should they evaluate to null
//this way, when our app first loads with no user data, we can populate it 
//with INITIAL_STATE the first time
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
              ...state,
              currentUser: action.payload,
              error: null
            } ;

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }

        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
          
        case UserActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                displayName: action.payload,
                email: action.payload,
                password: action.payload
            };

        default:
            return state;
    }
}

export default userReducer;