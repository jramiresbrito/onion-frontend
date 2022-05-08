import { Logo } from '../Logo/index';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenSatelitesModal: () => void;
}

export function Header({ onOpenSatelitesModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo />

        <button type="button" onClick={onOpenSatelitesModal}>
          Find Satelites
        </button>
      </Content>
    </Container>
  );
}
