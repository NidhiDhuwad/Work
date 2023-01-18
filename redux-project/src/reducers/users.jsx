
import { RETRIEVE_ALL_USER, RETRIEVE_LOGIN_USER,RETRIEVE_USER_EMAIL,RETRIEVE_USER_DELETE,RETRIEVE_USER_BY_ID,UPDATE_USER_BY_ID } from "../actions/type.jsx"
const initialState = {Response:false}
const usersReducer = (users = initialState,action) => {
    const{type,payload} = action;
    switch (type) {
        case RETRIEVE_ALL_USER:
            return { ...payload }
        case RETRIEVE_LOGIN_USER:
            return { ...payload }
    
        default:
            return users
    }
}
export const selectUser = (state) => state.users;

export default usersReducer;