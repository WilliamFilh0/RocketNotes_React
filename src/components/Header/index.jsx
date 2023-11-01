import { RiShutDownLine} from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/WilliamFilh0.png"
          alt="Foto do Usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>William Filho</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
} 