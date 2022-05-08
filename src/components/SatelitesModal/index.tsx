import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface satelitesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SatelitesModal({
  isOpen,
  onRequestClose,
}: satelitesModalProps) {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [amount, setAmount] = useState(0);

  async function handleFindClosestSatelites(event: FormEvent) {
    event.preventDefault();

    console.log({ lat, lon, amount });

    // Tear down
    setLat('');
    setLon('');
    setAmount(0);

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleFindClosestSatelites}>
        <h2>Find Closest Satelites</h2>

        <input
          placeholder="Latitude"
          value={lat}
          onChange={(event) => setLat(event.target.value)}
        />

        <input
          placeholder="Longitude"
          value={lon}
          onChange={(event) => setLon(event.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <button type="submit">Find Satelites!</button>
      </Container>
    </Modal>
  );
}
