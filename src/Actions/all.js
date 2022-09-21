import { getData } from "../utils/api";
import { getQuestions } from "./questions";
import { getUsers } from "./users";

export function getInitialData() {
    return dispatch => {
        return getData().then(({users,questions}) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
        });
    };
}