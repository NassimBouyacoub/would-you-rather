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
            [action.authUser]: {
                ...state[action.authUser],
                answers: {
                    ...state[action.authUser].answers,
                    [action.qid]: action.answer
                }
            }
        }
    }
    else if (action.type === "ADD_QUESTION_TO_USER") {
        console.log(action)
        return {
            ...state,
            [action.author]: {
                ...state[action.author],
                questions: state[action.author].questions.concat(action.id)
            }
        }
    }
    return state;
}


