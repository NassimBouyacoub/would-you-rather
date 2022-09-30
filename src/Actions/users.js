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

export function SaveQuestionAnswers(authedUser, qid, answer) {
    return dispatch => {
        dispatch(addAnswerToUser(authedUser, qid, answer))
        dispatch(addResponse(authedUser, qid, answer))

        return saveQuestionAnswer({ authedUser, qid, answer }).catch(e => console.log(e))
    }
}