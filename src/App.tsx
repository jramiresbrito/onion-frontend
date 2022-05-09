import Modal from 'react-modal';
import { useState } from 'react';

import { Header } from './components/Header';
import { SatellitesModal } from './components/SatellitesModal';
import { Globe } from './components/Globe';

import { GlobalStyle } from './styles/global';
import { SatellitesProvider } from './hooks/useSatellites';

Modal.setAppElement('#root');

export function App() {
  const [satellitesModalIsOpened, setSatellitesModalIsOpened] = useState(false);

  function handleOpenSatellitesModal() {
    setSatellitesModalIsOpened(true);
  }

  function handleCloseSatellitesModal() {
    setSatellitesModalIsOpened(false);
  }

  return (
    <div className="App">
      <SatellitesProvider>
        <GlobalStyle />
        <Header onOpensatellitesModal={handleOpenSatellitesModal} />

        <SatellitesModal
          isOpen={satellitesModalIsOpened}
          onRequestClose={handleCloseSatellitesModal}
        />

        <Globe />
      </SatellitesProvider>
    </div>
  );
}
