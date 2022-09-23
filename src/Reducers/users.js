export default function users(state = {}, action) {
    if (action.type === "RECEIVE_USERS") {
        return {
            ...state,
            ...action.users
        };
    }
    else if (action.type === "ADD_ANSWER_TO_USER") {
        console.log(action)
        return {
            ...state,
            [action.user]: {
                ...[action.user],
                answers: {
                    ...state[action.user].answers,
                    [action.questionId]: action.option
                }
            }
        }
    }

    return state;
}


