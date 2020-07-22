const INITIAL_STATE = {
  currentUser: null
}

//remember we can set parameters with default values should they evaluate to null
//this way, when our app first loads with no user data, we can populate it 
//with INITIAL_STATE the first time
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            } ;


        default:
            return state;
    }
}

export default userReducer;