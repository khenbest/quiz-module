import mongoose, { Schema } from 'mongoose'



let schema = new mongoose.Schema({
    prompt: { type: String, required: true },
    options: [{ type: Object, required: true }],
    correct: { type: Object, required: true },
    type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], default: "MultipleChoice", required: true },
    rationale: { type: String },
}, { timestamps: true })

export default class QuestionService {

    grade(answer, question) {
        let correct = 0
        for (var key in answer) {
            if (answer[key] == question.correct[key]) {
                correct += 1
            }
        }
        let numberOfQuestions = Object.keys(question).length
        if (correct == numberOfQuestions) {
            console.log('yes')
        } else { console.log("no") }
    }






    get repository() {
        return mongoose.model("Question", schema)
    }
}