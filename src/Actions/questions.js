import { saveQuestion } from "../utils/api"
import { addQuestionToUser } from "./users"

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
export function newQuestion(question) {
    return {
        type: "NEW_QUESTION",
        question

    }
}

export function addQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(question =>
            (console.log(question),
            dispatch(newQuestion(question),
                dispatch(addQuestionToUser(question)))
            ).catch(e => console.log(e)))
    }
}