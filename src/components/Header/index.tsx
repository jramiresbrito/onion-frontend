import { Logo } from '../Logo/index';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />

        <button type="button">Find Satelites</button>
      </Content>
    </Container>
  );
}
