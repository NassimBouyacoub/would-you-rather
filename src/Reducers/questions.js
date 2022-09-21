export function questions(state = {}, action) {
    if (action.type === 'RECIEVE_QUESTIONS') {
        return {
            ...state,
            ...action.questions
        }
    }
    return state;
}