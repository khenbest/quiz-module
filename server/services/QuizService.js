import mongoose, { Schema } from 'mongoose'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true },
    questions: [{ type: ObjectId, ref: "Question", required: true }],
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Hard'], required: true },
    topic: { type: String, required: true }
})

export default class QuizService {
    get repository() {
        return mongoose.model('Quiz', schema)
    }
}