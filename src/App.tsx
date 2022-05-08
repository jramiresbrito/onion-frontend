import Modal from 'react-modal';
import { useState } from 'react';

import { Header } from './components/Header';
import { SatelitesModal } from './components/SatelitesModal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [satelitesModalIsOpened, setSatelitesModalIsOpened] = useState(false);

  function handleOpenSatelitesModal() {
    setSatelitesModalIsOpened(true);
  }

  function handleCloseSatelitesModal() {
    setSatelitesModalIsOpened(false);
  }
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Header onOpenSatelitesModal={handleOpenSatelitesModal} />

        <SatelitesModal
          isOpen={satelitesModalIsOpened}
          onRequestClose={handleCloseSatelitesModal}
        />
      </>
    </div>
  );
}
