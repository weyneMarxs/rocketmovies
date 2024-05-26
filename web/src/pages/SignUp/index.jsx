import { Link } from 'react-router-dom'
import { Container, Form, Background } from './styles'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/InputText'
import { Button } from '../../components/Button'
export function SignUp() {
  return (
    <Container>
      <Background></Background>
      <Form>
        <h1>RocketMovies.</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Button title="Cadastrar"></Button>

        <Link to="/"> Voltar para o login</Link>
      </Form>
    </Container>
  )
}