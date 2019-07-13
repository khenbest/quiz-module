import express from "express"
import bp from "body-parser"
import "./db/dbconfig"

import QuestionController from './controllers/QuestionController'
import QuizController from "./controllers/QuizController";

let port = 3000

let server = express()

server.use(bp.json())


server.use('/api/questions', new QuestionController().router)
server.use('/api/quizzes', new QuizController().router)

server.use((error, req, res, next) => {
    res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
    console.log("Server running on port:", port)
})