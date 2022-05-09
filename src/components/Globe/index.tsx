import { useSatellites } from '../../hooks/useSatellites';
import { Container } from './styles';

export function Globe() {
  const { satellites } = useSatellites();

  return (
    <Container>
      <ul>
        {satellites.map((satellite) => (
          <li key={satellite.id}>{satellite.name}</li>
        ))}
      </ul>
    </Container>
  );
}
