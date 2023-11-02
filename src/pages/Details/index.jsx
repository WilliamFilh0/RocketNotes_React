import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae a vitae quasi illo rem magni numquam illum minima pariatur
            voluptatem tenetur est velit autem asperiores quas eveniet,
            culpa obcaecati libero.
          </p>

          <Section title="Links Uteis" >
            <Links>
              <li><a href='#'>https://www.rocketseat.com.br/</a></li>
              <li><a href='#'>https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores" >
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}

