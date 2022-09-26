import { addResponse } from "./questions";
import { saveQuestionAnswer } from "../utils/api";

export function getUsers(users) {
    return {
        type: 'RECEIVE_USERS',
        users
    };
}

export function addAnswerToUser(user, questionId, option) {
    return {
        type: "ADD_ANSWER_TO_USER",
        user,
        questionId,
        option
    }
}

export function addQuestionToUser({id,author}) {
    return {
        type: "ADD_QUESTION_TO_USER",
        id,
        author
    }
}

export function SaveQuestionAnswers(user, questionId, option) {
    return dispatch => {
        dispatch(addAnswerToUser(user, questionId, option))
        dispatch(addResponse(user, questionId, option))
        return saveQuestionAnswer({user, questionId, option}).catch(e => console.log(e))
    }
}