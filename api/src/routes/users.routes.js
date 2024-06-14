const {Router} = require('express')
const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const userRouter = Router()
const usersController = new UsersController()

userRouter.post('/', usersController.create)
userRouter.get('/:user_id', ensureAuthenticated, usersController.index)
userRouter.put('/', ensureAuthenticated, usersController.update)
// userRouter.delete('/:user_id', ensureAuthenticated, usersController.delete)

module.exports = userRouter