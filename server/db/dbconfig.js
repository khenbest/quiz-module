import mongoose from 'mongoose'
const connectionString = "mongodb+srv://kHenbest:kenbe$T94@khenbest-js6u2.mongodb.net/QuizMastr?retryWrites=true&w=majority"

let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})
connection.on("error", err => {
    console.error('[DATABASE ERROR]:', err)
})
connection.once("open", () => {
    console.log("Connected to the DB")
})