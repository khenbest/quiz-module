import mongoose from 'mongoose'

let schema = new mongoose.Schema({
    prompt: { type: String, required: true },
    options: [{ type: Object, required: true }],
    correct: [{ type: Object, required: true }],
    type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], default: "MultipleChoice", required: true },
    rationale: { type: String },
}, { timestamps: true })

export default class QuestionService {

    get repository() {
        return mongoose.model("Question", schema)
    }
}