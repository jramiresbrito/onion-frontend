import Modal from 'react-modal';
import { useState } from 'react';

import { Header } from './components/Header';
import { SatellitesModal } from './components/SatellitesModal';
import { Globe } from './components/Globe';

import { GlobalStyle } from './styles/global';
import { SatellitesProvider } from './hooks/useSatellites';

// Check if there is a better solution
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export function App() {
  const [satellitesModalIsOpened, setSatellitesModalIsOpened] = useState(false);

  function handleOpenSatellitesModal() {
    setSatellitesModalIsOpened(true);
  }

  function handleCloseSatellitesModal() {
    setSatellitesModalIsOpened(false);
  }

  return (
    <div data-testid="app-container" className="App">
      <SatellitesProvider>
        <GlobalStyle />
        <Header onOpenSatellitesModal={handleOpenSatellitesModal} />

        <SatellitesModal
          isOpen={satellitesModalIsOpened}
          onRequestClose={handleCloseSatellitesModal}
        />

        <Globe />
      </SatellitesProvider>
    </div>
  );
}
