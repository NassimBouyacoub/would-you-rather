import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'


describe('saveQuestion Test:', () => {
    //verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
    it("will return the saved question with the right fields ", async () => {
        var question = {
            "optionOneText": "ez",
            "optionTwoText": "a",
            "author": "sarahedo"
        }
        const Response = await _saveQuestion(question)
        expect(Response.author).toEqual(question.author)
        expect(Response.optionOne.text).toEqual(question.optionOneText)
        expect(Response.optionTwo.text).toEqual(question.optionTwoText)
    });
    //verify that an error is returned if incorrect data is passed to the function.
    it('will return Error if incorrect data is passed to the function', async () => {
        var forError = { "ggg": "rrr" }

        try {
            await _saveQuestion(forError)
        } catch (e) {
            expect(e).toEqual("Please provide optionOneText, optionTwoText, and author")
        }
    })
})

describe("saveQuestionAnswer Test :", () => {
    it('will return the saved answers question with the right fields .', async () => {
        var answerQuestion = {
            "authedUser": "sarahedo",
            "qid": "vthrdm985a262al8qx3do",
            "answer": "optionTwo"
        }
        const Answer = await _saveQuestionAnswer(answerQuestion)
        expect(Answer).toEqual(true)
    });
    it('will return the saved answers question with the right fields .', async () => {
        var answerQuestion = {
            "iam":"Error"
        }
        try {
           await _saveQuestionAnswer(answerQuestion)
        } catch (e) {
            expect(e).toEqual("Please provide authedUser, qid, and answer")
        }
    })

})