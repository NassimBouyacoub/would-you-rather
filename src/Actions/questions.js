export function getQuestions(questions) {
    return {
        type: 'RECIEVE_QUESTIONS',
        questions
    }
}

export function addResponse(user, questionId, option) {
    return {
        type: 'ADD_RESPONSE',
        user,
        questionId,
        option
    }
}