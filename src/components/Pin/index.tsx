/* 
  Credits on the Pins 3dModel to Yuri Artiukh: https://www.youtube.com/watch?v=2pUzJOfekVE
*/

interface SphericalCoordinates {
  coordinates: Array<{
    id: string;
    distance: number;
    lat: number;
    lon: number;
  }>;
}

export function Pin({ coordinates }: SphericalCoordinates) {
  return (
    <>
      <ambientLight intensity={1} />
      {coordinates.map((coordinate) => (
        <mesh
          key={coordinate.id}
          position={[2 + coordinate.distance, coordinate.lat, coordinate.lon]}
        >
          <sphereBufferGeometry args={[0.1, 20, 20]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
    </>
  );
}
