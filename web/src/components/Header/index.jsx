import { Container, Profile, Brand, Logout } from './styles.js'
import { Input } from '../InputText/'
export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies.</h1>
      </Brand>
      <input type="text" placeholder='Pesquisar pelo título' />
      <Profile to="/profile">
        <div>
          <strong>Weyne Marques</strong>
          <span>Bem-vindo</span>
        </div>
        <img src="https://github.com/weyneMarxs.png" alt="foto do usuario" />
      </Profile>
    </Container>
  )
}