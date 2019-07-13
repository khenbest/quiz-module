import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    questions: [{ type: ObjectId, ref: "Question" }]
})

export default class QuizService {

    get repository() {
        return mongoose.model("Quiz", schema)
    }
}