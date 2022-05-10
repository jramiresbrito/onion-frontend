import { Logo } from '../Logo/index';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenSatellitesModal: () => void;
}

export function Header({ onOpenSatellitesModal }: HeaderProps) {
  return (
    <Container data-testid="header-container">
      <Content>
        <Logo />

        <button
          data-testid="header-button"
          type="button"
          onClick={onOpenSatellitesModal}
        >
          Find Satellites
        </button>
      </Content>
    </Container>
  );
}
