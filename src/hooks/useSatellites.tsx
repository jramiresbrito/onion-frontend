import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface SatelliteFormInput {
  lat: number;
  lon: number;
  amount: number;
}

type SphericalCoordinates = Array<{
  id: string;
  distance: number;
  lat: number;
  lon: number;
}>;

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
  convertToSphericalCoordinates: () => SphericalCoordinates;
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

  /*
   * Calculations following: https://en.wikipedia.org/wiki/Spherical_coordinate_system
   */
  function convertToSphericalCoordinates() {
    const coordinates = satellites.map((satellite) => {
      let converted_lat = (satellite.sat_lat * Math.PI) / 180;
      let converted_lon = (satellite.sat_lon * Math.PI) / 180;
      let distanceIncrementor = satellite.distance * 0.0001;

      return {
        id: satellite.name,
        distance: distanceIncrementor,
        lat: converted_lat,
        lon: converted_lon,
      };
    });

    console.log(coordinates);

    return coordinates;
  }

  return (
    <SatellitesContext.Provider
      value={{
        satellites,
        findClosestSatellites,
        convertToSphericalCoordinates,
      }}
    >
      {children}
    </SatellitesContext.Provider>
  );
}

export function useSatellites() {
  const context = useContext(SatellitesContext);

  return context;
}
