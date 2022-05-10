import { useSatellites } from '../../hooks/useSatellites';
import { Container } from './styles';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from '../Earth';
import { Pin } from '../Pin';

export function Globe() {
  const { convertToSphericalCoordinates } = useSatellites();
  const coordinates = convertToSphericalCoordinates();

  return (
    <Container data-testid="globe-container">
      <Canvas>
        <Suspense fallback={null}>
          <Pin coordinates={coordinates} />
          <Earth />
        </Suspense>
      </Canvas>
    </Container>
  );
}
