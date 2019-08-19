import mongoose, { Schema } from 'mongoose'

let schema = new Schema({
  name: { type: String, required: true, unique: true, uppercase: true }
})

export default class CategoryService {
  get repository() {
    return mongoose.model('Category', schema)
  }
}