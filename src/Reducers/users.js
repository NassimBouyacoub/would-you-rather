export default function users(state = {}, action) {
    if (action.type === "RECEIVE_USERS") {
        return {
            ...state,
            ...action.users
        };
    }
    return state;
}