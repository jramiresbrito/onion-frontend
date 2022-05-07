import { useState } from 'react';
import Modal from 'react-modal';
import { Logo } from '../Logo/index';

import { Container, Content } from './styles';

Modal.setAppElement('#root');

export function Header() {
  const [satelitesModalIsOpened, setSatelitesModalIsOpened] = useState(false);

  function handleOpenSatelitesModal() {
    setSatelitesModalIsOpened(true);
  }

  function handleCloseSatelitesModal() {
    setSatelitesModalIsOpened(false);
  }

  return (
    <Container>
      <Content>
        <Logo />

        <button type="button" onClick={handleOpenSatelitesModal}>
          Find Satelites
        </button>

        <Modal
          isOpen={satelitesModalIsOpened}
          onRequestClose={handleCloseSatelitesModal}
        >
          <h2>Find Nearby Satelites</h2>
        </Modal>
      </Content>
    </Container>
  );
}
