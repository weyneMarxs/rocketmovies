import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles'

import { Input } from '../../components/InputText'
import { Button } from '../../components/Button'
export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies.</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Button title="Entrar"></Button>

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background></Background>
    </Container>
  )
}