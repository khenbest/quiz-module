import mongoose from 'mongoose'

let schema = new mongoose.Schema({
    prompt: { type: String, required: true },
    options: [{ type: Object, required: true }],
    correct: [{ type: Object, required: true }],
    type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], required: true },
    rationale: { type: String },
}, { timestamps: true })

//Match -- definition to value
// let o = [
//     { value: "express" },
//     { value: "http" },
//     { value: "who wants money", isDefintion: true }
// ]

// let correct = [{ value: "express", definition: "how wants money" }, { value: "http" }]


export default class QuestionService {

    gradeQuestion(answer, question) {

        switch (question.type) {
            case "TrueFalse":
                this.gradeTrueFalse(answer, question)
                break;
            case "MultipleChoice":
                this.gradeMultipleChoice(answer, question)
                break;
            case "FillInTheBlank":
                this.gradeFillInTheBlank(answer, question)
                break;
            case "Match":
                this.gradeMatch(answer, question)
                break;
            case "OpenEnded":
                this.gradeOpenEnded(answer, question)
                break;
            default: "No Function Here"
                break;
        }
    }

    gradeTrueFalse(answer, question) {
        if (answer.submission == Object.keys(question.correct[0])) {
            return "Correct!"
        } else {
            return "So close"
        }
    }
    gradeMultipleChoice(answer, question) {
        if (answer.submission.length != question.correct.length) {
            return "You have incorrect answers"
        }
        let correctStudentAnswers = answer.submission.filter(x => question.correct.find(y => y.value == x.value))
        if (correctStudentAnswers.length !== question.correct.length) {
            return "WRONGO"
        }
        else return "Correct!"
    }
    gradeFillInTheBlank(answer, question) {

    }
    gradeMatch(answer, question) {
        let correct = 0
        // may change this to Match as I believe Match will be the actual outlier, NOT t/f
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
    gradeOpenEnded(answer, question) {

    }

    get repository() {
        return mongoose.model("Question", schema)
    }
}