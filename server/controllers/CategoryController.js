import express from 'express'
import CategoryService from '../services/CategoryService';
import { nextTick } from 'q';

let categoryService = new CategoryService()
let categoryRepo = categoryService.repository

export default class CategoryController {
  async deleteCategory(req, res, next) {
    try {
      await categoryRepo.findByIdAndDelete(req.params.id)
    } catch (error) {
      next(error)
    }
  }
  async createCategory(req, res, next) {
    try {
      let newCategory = await categoryRepo.create(req.body)
      res.send(newCategory)
    } catch (error) {
      next(error)
    }
  }
  async getAllCategories(req, res, next) {
    try {
      let categories = await categoryRepo.find({})
      res.send(categories)
    } catch (error) {
      next(error)
    }
  }
  constructor() {
    this.router = express.Router()
      .get('', this.getAllCategories)
      .post('', this.createCategory)
      .delete('/:id', this.deleteCategory)
  }
}