import express from 'express'
import QuestionService from '../services/QuestionService';

let questionServ = new QuestionService()
let questionRepo = questionServ.repository

export default class QuestionController {
    async getAllQuestions(req, res, next) {
        try {
            let questions = await questionRepo.find({})
            res.send(questions)
        } catch (error) { next(error) }
    }

    async createQuestion(req, res, next) {
        try {
            let newQuestion = await questionRepo.create(req.body)
            res.send(newQuestion)
        } catch (error) { next(error) }
    }
    constructor() {
        this.router = express.Router()
            .get('', this.getAllQuestions)
            .post('', this.createQuestion)
    }

}