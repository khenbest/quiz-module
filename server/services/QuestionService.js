import mongoose from 'mongoose'

let schema = new mongoose.Schema({
    prompt: { type: String, required: true },
    options: [{ type: Object, required: true }],
    // options2: [{ type: Object }],
    correct: [{ type: Object, required: true }],
    type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], default: "MultipleChoice", required: true },
    rationale: { type: String },
}, { timestamps: true })

//Match -- definition to value
let o = [
    { value: "express" },
    { value: "http" },
    { value: "who wants money", defintion: true }
]

let correct = [{ value: "express", definition: "how wants money" }, { value: "http" }]


export default class QuestionService {

    grade(answer, question) {
        let correct = 0
        // may change this to Match as I believe Match will be the actual outlier, NOT t/f
        if (question.type == "TrueFalse") {
            if (answer.submission == Object.keys(question.correct)[0]) {
                return "Correct!"
            } else {
                return "So close."
            }
        }
        for (var key in answer.submission) {
            if (answer.submission[key] == question.correct[key]) {
                correct += 1
            }
        }
        let numberOfQuestions = Object.keys(question.correct).length
        if (correct == numberOfQuestions) {
            return "Correct!"
        } else { return "You have " + correct + " correct answers." }
    }

    get repository() {
        return mongoose.model("Question", schema)
    }
}