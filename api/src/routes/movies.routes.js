const { Router } = require('express')
const MoviesController = require('../controllers/MoviesController')

const movieNotesRouter = Router()
const moviesController = new MoviesController

movieNotesRouter.post('/:user_id', moviesController.create)
movieNotesRouter.get('/:user_id', moviesController.index)
movieNotesRouter.delete('/:user_id', moviesController.delete)

module.exports = movieNotesRouter

