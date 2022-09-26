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
    else if (action.type === "ADD_QUESTION_TO_USER") {
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


