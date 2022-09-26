import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA'

export function getData() {
    return Promise.all([_getQuestions(), _getUsers()]).then(
        ([questions, users]) => (
            {
                users,
                questions
            }
        ),
    );
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(question ) {
    return _saveQuestionAnswer(question)
}