import { Logo } from '../Logo/index';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpensatellitesModal: () => void;
}

export function Header({ onOpensatellitesModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo />

        <button type="button" onClick={onOpensatellitesModal}>
          Find Satellites
        </button>
      </Content>
    </Container>
  );
}
