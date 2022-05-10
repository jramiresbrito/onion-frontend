/* 
  Credits on the Earth 3DModel to CoderOne: https://www.youtube.com/watch?v=ymavtyRpT0E
*/

import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import earthDayMap from '../../assets/textures/day_map.jpg';
import earthNormalMap from '../../assets/textures/normal_map.jpg';
import earthSpecularMap from '../../assets/textures/specular_map.jpg';
import earthCloudsMap from '../../assets/textures/clouds_map.jpg';

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [earthDayMap, earthNormalMap, earthSpecularMap, earthCloudsMap]
  );

  return (
    <>
      <ambientLight intensity={1} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      {/* CLOUDY EARTH START ☁️ */}
      <mesh>
        <sphereGeometry args={[2.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* CLOUDY EARTH FINISH ☁️ */}

      {/* EARTH START 🌍 */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
      {/* EARTH FINISH 🌍 */}
    </>
  );
}
