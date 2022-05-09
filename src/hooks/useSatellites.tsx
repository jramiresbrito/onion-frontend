import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface SatelliteFormInput {
  lat: number;
  lon: number;
  amount: number;
}

interface Satellite {
  id: string;
  name: string;
  sat_lat: number;
  sat_lon: number;
  input_lat: number;
  input_lon: number;
  distance: number;
}

interface SatellitesContextData {
  satellites: Satellite[];
  findClosestSatellites: (
    satelliteFormInput: SatelliteFormInput
  ) => Promise<void>;
}

interface SatellitesProviderProps {
  children: ReactNode;
}

const SatellitesContext = createContext<SatellitesContextData>(
  {} as SatellitesContextData
);

export function SatellitesProvider({ children }: SatellitesProviderProps) {
  const [satellites, setSatellites] = useState<Satellite[]>([]);

  async function findClosestSatellites(satelliteFormInput: SatelliteFormInput) {
    const response = await api.post('/nearby', satelliteFormInput);

    const { data: satellites } = response;

    setSatellites(satellites);
  }

  return (
    <SatellitesContext.Provider value={{ satellites, findClosestSatellites }}>
      {children}
    </SatellitesContext.Provider>
  );
}

export function useSatellites() {
  const context = useContext(SatellitesContext);

  return context;
}
