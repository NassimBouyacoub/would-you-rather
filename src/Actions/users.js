import { addResponse } from "./questions";
import { saveQuestionAnswer } from "../utils/api";

export function getUsers(users) {
    return {
        type: 'RECEIVE_USERS',
        users
    };
}

export function addAnswerToUser(authUser, qid, answer) {
    return {
        type: "ADD_ANSWER_TO_USER",
        authUser,
        qid,
        answer
    }
}

export function addQuestionToUser({ id, author }) {
    return {
        type: "ADD_QUESTION_TO_USER",
        id,
        author
    }
}

export function SaveQuestionAnswers(authUser, qid, answer) {
    return dispatch => {
        dispatch(addAnswerToUser(authUser, qid, answer))
        dispatch(addResponse(authUser, qid, answer))

        return saveQuestionAnswer({ authUser, qid, answer }).catch(e => console.log(e))
    }
}