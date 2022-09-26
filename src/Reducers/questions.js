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
            [action.qid]: {
                ...state[action.qid],
                [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat(action.authUser)
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