import mongoose from 'mongoose'

let schema = new mongoose.Schema({
    prompt: { type: String, required: true },
    options: [{ type: Object }],
    correct: [{ type: Object }],
    type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], required: true },
    rationale: { type: String },
    categories: [{ type: String, enum: ["HTML", "CSS", "Style and Design", "Built In Methods", "SOLID", "OOP", "C#", "Scrum", "Javascript", "Design Patterns"] }]
}, { timestamps: true })




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
            // { passed: true, correctAnswer: question.correct}
            return
        } else {
            return false
        }
    }
    gradeMultipleChoice(answer, question) {
        if (answer.submission.length != question.correct.length) {
            return "Incorrect"
        }
        let correctStudentAnswers = answer.submission.filter(x => question.correct.find(y => y.value == x.value))
        if (correctStudentAnswers.length !== question.correct.length) {
            return "Incorrect"
        }
        else return "Correct!"
    }
    gradeFillInTheBlank(answer, question) {
        let correct = true
        question.correct.forEach(x => {
            let y = answer.submission.find(z => z.value == x.value)
            if (!y) { correct = false; return }
            if (y.definition !== x.definition) { correct = false }
        })
        console.log(correct)
        return correct
    }
    gradeMatch(answer, question) {
        let correct = true
        question.correct.forEach(x => {
            let y = answer.submission.find(z => z.value == x.value)
            if (!y) { correct = false; return }
            if (y.definition !== x.definition) { correct = false }
        })
        console.log(correct)
        return correct
    }

    gradeOpenEnded(answer, question) {
        return question.rationale
    }

    get repository() {
        return mongoose.model("Question", schema)
    }
}