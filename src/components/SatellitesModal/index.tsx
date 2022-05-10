import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useSatellites } from '../../hooks/useSatellites';
import { Container } from './styles';

interface satellitesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SatellitesModal({
  isOpen,
  onRequestClose,
}: satellitesModalProps) {
  const { findClosestSatellites } = useSatellites();

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [amount, setAmount] = useState(1);

  function tearDownModal() {
    setLat(0);
    setLon(0);
    setAmount(1);

    onRequestClose();
  }

  async function handleFindClosestSatellites(event: FormEvent) {
    event.preventDefault();

    await findClosestSatellites({
      lat,
      lon,
      amount,
    });

    tearDownModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={tearDownModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={tearDownModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container data-testid="satellites-modal-container" onSubmit={handleFindClosestSatellites}>
        <h2>Find Closest Satellites</h2>

        <label>
          Latitude{' '}
          <small>
            <i>(-90 to 90 degrees)</i>
          </small>
          <input
            type="number"
            min="-90"
            max="90"
            step="0.0001"
            value={lat}
            onChange={(event) => setLat(Number(event.target.value))}
          />
        </label>

        <label>
          Longitude{' '}
          <small>
            <i>(-180 to 180 degrees)</i>
          </small>
          <input
            type="number"
            placeholder="Longitude"
            min="-180"
            max="180"
            step="0.0001"
            value={lon}
            onChange={(event) => setLon(Number(event.target.value))}
          />
        </label>

        <label>
          Amount
          <input
            type="number"
            placeholder="Amount"
            min="1"
            step="1"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>

        <button type="submit">Find Satellites!</button>
      </Container>
    </Modal>
  );
}
