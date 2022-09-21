export default function authUser(state = null, action) {
    if (action.type === "SET_AUTHED_USER") {
        return action.id
    }
    return state;
}