import { Link } from 'react-router-dom'
import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/InputText'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { FiArrowLeft } from 'react-icons/fi'
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft /> voltar</Link>
            <h1>Novo Filme</h1>
          </header>
          <div>
            <Input placeholder="Título"></Input>
            <Input placeholder="Sua nota (de 0 a 5)"></Input>
          </div>
          <Textarea placeholder="Observações" />
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem placeholder="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}