import { saveQuestion } from "../utils/api"
import { addQuestionToUser } from "./users"

export function getQuestions(questions) {
    return {
        type: 'RECIEVE_QUESTIONS',
        questions
    }
}

export function addResponse(authUser, qid, answer) {
    return {
        type: 'ADD_RESPONSE',
        authUser,
        qid,
        answer
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
        (
            dispatch(newQuestion(question),
                dispatch(addQuestionToUser(question)))
        )).catch(e => console.log(e))
    }
}