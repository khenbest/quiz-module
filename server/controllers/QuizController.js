import express from 'express'
import QuizService from '../services/QuizService';

let quizServ = new QuizService()
let quizRepo = quizServ.repository

export default class QuizController {
    async getAllQuizzes(req, res, next) {
        try {
            let quizzes = await quizRepo.find({})
            res.send(quizzes)
        } catch (error) { next(error) }
    }
    async getOneQuiz(req, res, next) {
        try {
            let quiz = await quizRepo.findById(req.params.id)
            res.send(quiz)
        } catch (error) { next(error) }
    }
    async createQuiz(req, res, next) {
        try {
            let newQuiz = await quizRepo.create(req.body)
            res.send(newQuiz)
        } catch (error) { next(error) }
    }

    async editQuiz(req, res, next) {
        try {
            let editedQuiz = await quizRepo.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.send(editedQuiz)
        } catch (error) { next(error) }
    }

    async delortQuiz(req, res, next) {
        try {
            await quizRepo.findByIdAndDelete(req.params.id)
            res.send("Successfully Delorted")
        } catch (error) { next(error) }
    }

    constructor() {
        this.router = express.Router()
            .get('', this.getAllQuizzes)
            .get('/:id', this.getOneQuiz)
            .post('', this.createQuiz)
            .put('/:id', this.editQuiz)
            .delete('/:id', this.delortQuiz)
    }

}