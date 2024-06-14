const { Router } = require('express')
const MoviesController = require('../controllers/MoviesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const moviesRouter = Router()
const moviesController = new MoviesController
moviesRouter.use(ensureAuthenticated)

moviesRouter.post('/:user_id', moviesController.create)
moviesRouter.get('/:user_id', moviesController.index)
moviesRouter.delete('/:user_id', moviesController.delete)

module.exports = moviesRouter

