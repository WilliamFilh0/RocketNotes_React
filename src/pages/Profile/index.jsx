import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form } from "./style";



export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="text"
          icon={FiLock}
        />

        <Input
          placeholder="Nova Senha"
          type="text"
          icon={FiLock}
        />

        <Button title="Salvar"/>


      </Form>

    </Container>

  )
}