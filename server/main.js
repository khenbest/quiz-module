import express from "express"
import bp from "body-parser"
import cors from 'cors'
import "./db/dbconfig"

import QuestionController from './controllers/QuestionController'
import QuizController from "./controllers/QuizController";
import Categorycontroller from './controllers/CategoryController';

const port = process.env.PORT || 3000

let server = express()

server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

server.use(express.static(__dirname + '/../client/dist'))
var whitelist = [];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
server.use(cors(corsOptions))

server.use('/api/questions', new QuestionController().router)
server.use('/api/quizzes', new QuizController().router)
server.use('/api/categories', new Categorycontroller().router)

server.use((error, req, res, next) => {
    res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
    console.log("Server running on port:", port)
})