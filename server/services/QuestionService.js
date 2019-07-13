import mongoose, { Schema } from 'mongoose'



let schema = new mongoose.Schema({
    prompt: { type: String, required: true },
    options: [{ type: Object, required: true }],
    correct: [{ type: Object, required: true }],
    type: { type: String, enum: ["TrueFalse", "Match", "OpenEnded", "FillInTheBlank", "MultipleChoice"], default: "MultipleChoice", required: true },
    rationale: { type: String },
}, { timestamps: true })

export default class QuestionService {

    //answers should have a question id so we can find the question and then evaluate based off the question type, as well as a formatted answer
    //when we submit a quiz that's been taken, what will that look like?
    //{answers: [{question: id,}, answer: {key: value}}

    //method for solving true/false
    //
    //method for 'match'

    // handle open ended responses

    //method for 'fill in the blank' - how are we going to do this? it might become a matter of semantics


    //method for 'multiple choice'



    get repository() {
        return mongoose.model("Question", schema)
    }
}