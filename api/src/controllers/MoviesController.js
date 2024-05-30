const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class MoviesController {
  async create (req, res){
    const { user_id } = req.params
    const { title, description, rating, movie_tags } = req.body

    if(rating > 5) {
      throw new AppError('A nota só pode ser de 1 há 5')
    }
    const [movie_note_id] = await knex('movie_notes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = movie_tags.map( name => {
      return {
        movie_note_id,
        name,
        user_id
      }
    })
    await knex('tags').insert(tagsInsert)
    return res.send("Filme cadastrado com sucesso !")
  }
  async index(req, res) {
    const { user_id } = req.params
    const movies = await knex('movie_notes').where({user_id})

    res.json(movies)
  }
}

module.exports = MoviesController