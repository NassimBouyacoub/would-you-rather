export function questions(state = {}, action) {
    if (action.type === 'RECIEVE_QUESTIONS') {
        return {
            ...state,
            ...action.questions
        }
    }
    else if (action.type === 'ADD_RESPONSE') {
        return {
            ...state,
            [action.questionId]: {
                ...state[action.questionId],
                [action.option]: {
                    ...state[action.questionId][action.option],
                    votes: state[action.questionId][action.option].votes.concat(action.user)
                }
            }
        }
    }
    else if (action.type === "NEW_QUESTION") {
        return {
            ...state,
            [action.question.id]: action.question
        }
    }
    return state;
}