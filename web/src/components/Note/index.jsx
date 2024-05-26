import { Container } from './styles.js'
import { Tag } from '../Tag'
import { StarRating } from '../StarRating'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <StarRating rating={data.rating} />
      <p>{data.snopse}</p>
      {
        data.genres &&
        <footer>
          {
            data.genres.map(genre => <Tag key={genre.id} title={genre.name} />)
          }
        </footer>
      }
    </Container>
  )
}