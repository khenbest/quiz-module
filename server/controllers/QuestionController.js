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
    async getOneQuestion(req, res, next) {
        try {
            let question = await questionRepo.findById(req.params.id)
            res.send(question)
        } catch (error) { next(error) }
    }
    async createQuestion(req, res, next) {
        try {
            let newQuestion = await questionRepo.create(req.body)
            res.send(newQuestion)
        } catch (error) { next(error) }
    }

    async editQuestion(req, res, next) {
        try {
            let editedQuestion = await questionRepo.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.send(editedQuestion)
        } catch (error) { next(error) }
    }

    async delortQuestion(req, res, next) {
        try {
            await questionRepo.findByIdAndDelete(req.params.id)
            res.send("Successfully Delorted")
        } catch (error) { next(error) }
    }

    constructor() {
        this.router = express.Router()
            .get('', this.getAllQuestions)
            .get('/:id', this.getOneQuestion)
            .post('', this.createQuestion)
            .put('/:id', this.editQuestion)
            .delete('/:id', this.delortQuestion)
    }

}